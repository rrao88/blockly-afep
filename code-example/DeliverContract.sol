pragma solidity ^0.4.0;

import "BaseContract.sol";

contract DeliverContract is BaseContract {

	enum State { Created, Locked, InDelivery, Inactive }
	State public state;

	address public carrier = 0; //Ethereum address of the carrier

	function DeliverContract() payable public {
		seller = msg.sender;
		value = msg.value / 2;
		state = State.Created;
		require((2 * value) == msg.value);
	}

	modifier inState(State _state) {
		require(state == _state);
		_;
	}

	modifier onlyCarrier() {
		require(msg.sender == carrier);
		_;
	}

	event DeliverObject();

	function confirmPurchase() inState(State.Created) payable public {
		DeliverObject();
		super.purchaseOrderReceived();
		state = State.Locked;
	}

	function confirmInTransit() onlyCarrier inState(State.Locked) public {
		state = State.InDelivery;
	}

	function confirmReceived() inState(State.InDelivery) public {
		state = State.Inactive;
		super.orderReceivedConfirmed();
	}

}