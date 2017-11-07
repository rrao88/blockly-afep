pragma solidity ^0.4.0;

import "BaseContract.sol";

contract DeliverContract is BaseContract {

	enum State { Created, Locked, InDelivery, Inactive }
	State public state;

	modifier inState(State _state) {
		require(state == _state);
		_;
	}

	function DeliverContract() payable public {
		seller = msg.sender;
		value = msg.value / 2;
		state = State.Created;
		require((2 * value) == msg.value);
	}

	modifier onlyCarrier() {
		require(msg.sender == buyer);
		_;
	}

	function confirmPurchase() inState(State.Created) payable public {
		super.purchaseOrderReceived();
		state = State.Locked;
	}

	function confirmReceived() inState(State.InDelivery) public {
		state = State.Inactive;
		super.orderReceivedConfirmed();
	}

	function confirmInTransit() onlyBuyer inState(State.Locked) public {
		state = State.InDelivery;
	}

}