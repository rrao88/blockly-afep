pragma solidity ^0.4.11;

contract Purchase {

	enum State { Created, Locked, Inactive }

	address public seller;
	address public buyer;
	uint public value;
	State public state;

	function Purchase() payable public {
		seller = msg.sender;
		value = msg.value / 2;
		state = State.Created;
		require((2 * value) == msg.value);
	}

	modifier condition(bool _condition) {
		require(_condition);
		_;
	}

	modifier onlyBuyer() {
		require(msg.sender == buyer);
		_;
	}

	modifier onlySeller() {
		require(msg.sender == seller);
		_;
	}

	modifier inState(State _state) {
		require(state == _state);
		_;
	}

	function abortSale() onlySeller inState(State.Created) public {
		state = State.Inactive;
		seller.transfer(this.balance);
	}

	function confirmPurchase() inState(State.Created)
	condition(msg.value == (2 * value)) payable public {
		buyer = msg.sender;
		state = State.Locked;
	}

	function confirmReceived() onlyBuyer inState(State.Locked) public {
		state = State.Inactive;
		buyer.transfer(value);
		seller.transfer(this.balance);
	}
}