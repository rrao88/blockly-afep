pragma solidity ^0.4.0;


contract SatislohContract {

	enum State { Created, Ordered, Produced, InDelivery, Received, Inactive }
	State public state;
	address public seller;
	address public buyer;
	uint public value;


	function SatislohContract() public {
		seller = msg.sender;
		value = 100;
		state = State.Created;
	}

	modifier condition(bool _condition) {
		require(_condition);
		_;
	}

	modifier inState(State _state) {
		require(state == _state);
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

	modifier onlyCarrier() {
		require(msg.sender == carrier);
		_;
	}

	event DeliverOrder();
	event PaySecondInstallment();

	function confirmOrderPlaced() onlyBuyer inState(State.Created) condition(msg.value = (value * 0.3)) payable public {
		buyer = msg.sender;
		state = State.Ordered;
		seller.transfer(this.balance);
	}

	function confirmOrderProduced() onlySeller inState(State.Ordered) public {
		//Optional event (depending on payment option): PaySecondInstallment();
		//Optional event (depending on payment option): DeliverOrder();
		state = State.Produced;
	}

	function confirmSecondInstallmentPaid() onlySeller inState(State.Produced) condition(msg.value = (value * 0.6)) public payable {
		seller.transfer(this.balance);
	}

	function confirmOrderInDelivery() onlyCarrier inState(State.Produced) public {
		state = State.InDelivery;
	}

	function confirmOrderReceived() onlyBuyer inState(State.InDelivery) public {
		state = State.Received;
	}

	function confirmOrderCompleted() onlyBuyer inState(State.Received) condition(msg.value = (value * 0.1)) public {
		seller.transfer(this.balance);
		state = State.Inactive;
	}

}
