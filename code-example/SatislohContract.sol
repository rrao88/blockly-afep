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
	event InstallMachine();

	function confirmOrderPlaced() inState(State.Created) condition((value * 0.3) = msg.value) payable public {
		buyer = msg.sender;
		state = State.Ordered;
		seller.transfer(this.balance);
	}

	function confirmOrderProduced() onlySeller inState(State.Ordered) public {
		PaySecondInstallment();
		state = State.Produced;
	}

	function confirmSecondInstallmentPaid() onlySeller inState(State.Produced) condition((value * 0.6) = msg.value) public payable {
		seller.transfer(this.balance);
		DeliverOrder();
	}

	function confirmOrderInDelivery() onlyCarrier inState(State.Produced) public {
		state = State.InDelivery;
	}

	function confirmOrderReceived() onlyBuyer inState(State.InDelivery) public {
		state = State.Received;
		InstallMachine();
	}

	function confirmOrderCompleted() onlyBuyer inState(State.Received) condition((value * 0.1) = msg.value) public {
		seller.transfer(this.balance);
		state = State.Inactive;
	}

}
