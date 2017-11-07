pragma solidity ^0.4.0;

import "BaseContract.sol";

contract PickupContract is BaseContract {

	enum State { Created, Locked, Inactive }
	State public state;

	modifier inState(State _state) {
		require(state == _state);
		_;
	}

	function PickupContract() payable public {
		seller = msg.sender;
		value = msg.value / 2;
		state = State.Created;
		require((2 * value) == msg.value);
	}

	function confirmPurchase() inState(State.Created) payable public {
		super.purchaseOrderReceived();
		state = State.Locked;
	}

	function confirmReceived() inState(State.Locked) public {
		state = State.Inactive;
		super.orderReceivedConfirmed();
	}

}