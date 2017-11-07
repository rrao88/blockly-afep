pragma solidity ^0.4.0;


contract BaseContract {
	enum State { Created, Locked, Inactive }

	address public seller;
	address public buyer;
	uint public value;
	State public state;

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
