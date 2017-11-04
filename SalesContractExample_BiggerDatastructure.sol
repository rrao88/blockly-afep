pragma solidity ^0.4.11;


contract Purchase {

	enum State {
		Created, Locked, Inactive
	}

	struct Seller {
		address uid;
		string name;
		string postaladdress;
	}

	struct Buyer {
		address uid;
		string fullname;
		string postaladdress;
	}

	uint public value;
	Seller public seller;
	State public state;
	Buyer public buyer;

	function Purchase(string name, string postaladdress)
	payable
	public
	{
		seller.uid = msg.sender;
		seller.name = name;
		seller.postaladdress = postaladdress;
		value = msg.value / 2;
		state = State.Created;
		require((2 * value) == msg.value);
	}

	modifier condition(bool _condition) {
		require(_condition);
		_;
	}

	modifier onlyBuyer() {
		require(msg.sender == buyer.uid);
		_;
	}

	modifier onlySeller() {
		require(msg.sender == seller.uid);
		_;
	}

	modifier inState(State _state) {
		require(state == _state);
		_;
	}

	event Aborted();
	event PurchaseConfirmed();
	event ItemReceived();

	function abort() onlySeller inState(State.Created) public
	{
		Aborted();
		state = State.Inactive;
		seller.uid.transfer(this.balance);
	}

	function confirmPurchase(string fullname, string postaladdress)
	inState(State.Created) condition(msg.value == (2 * value))
	payable public
	{
		PurchaseConfirmed();
		buyer.uid = msg.sender;
		buyer.fullname = fullname;
		buyer.postaladdress = postaladdress;
		state = State.Locked;
	}

	function confirmReceived() onlyBuyer inState(State.Locked) public
	{
		ItemReceived();
		state = State.Inactive;
		buyer.uid.transfer(value);
		seller.uid.transfer(this.balance);
	}
}