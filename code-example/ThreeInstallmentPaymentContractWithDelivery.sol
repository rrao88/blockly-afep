pragma solidity ^0.4.0;

import "SatislohBaseContract.sol";

contract ThreeInstallmentPaymentContractWithDelivery is SatislohBaseContract {

	enum State { Created, Ordered, Produced, InDelivery, Received, Inactive }
	State public state;
	uint private first;
	uint private second;
	uint private third;

	modifier inState(State _state) {
		require(state == _state);
		_;
	}

	modifier condition(bool _condition) {
		require(_condition);
		_;
	}

	function ThreeInstallmentPaymentContractWithDelivery() public {
		seller = msg.sender;
		carrier = 0xdd870fa1b7c4700f2bd7f44238821c26f7392148;
		value = 100 * 10**18; //convert from Ether to Wei
		first = 30; //calculate by myself
		second = 60; //calculate by myself
		third = 10; //calculate by myself
		state = State.Created;
	}

	event DeliverOrder();
	event PaySecondInstallment();

	function confirmOrderPlaced() inState(State.Created) condition(first == msg.value) payable public {
		super.orderPlaced();
		state = State.Ordered;
		seller.transfer(this.balance);
	}

	function confirmOrderProduced() inState(State.Ordered) public {
		super.orderProduced();
		PaySecondInstallment();
		state = State.Produced;
	}

	function confirmSecondInstallmentPaid() inState(State.Produced) condition(second == msg.value) public payable {
		super.secondInstallmentPaid();
		seller.transfer(this.balance);
		DeliverOrder();
	}

	function confirmOrderInDelivery() inState(State.Produced) public {
		super.orderInDelivery();
		state = State.InDelivery;
	}

	function confirmOrderReceived() inState(State.InDelivery) public {
		super.orderReceived();
		state = State.Received;
	}

	function confirmOrderCompleted() inState(State.Received) condition(third == msg.value) public payable {
		super.orderCompleted();
		seller.transfer(this.balance);
		state = State.Inactive;
	}

	function confirmOrderAborted() inState(State.Created) public {
		super.orderAborted();
		state = State.Inactive;
	}

}
