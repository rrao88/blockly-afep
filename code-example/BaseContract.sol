pragma solidity ^0.4.0;


contract BaseContract {

	address public seller;
	address public buyer;
	uint public value;

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

	function purchaseOrderReceived()
	condition(msg.value == (2 * value)) payable public {
		buyer = msg.sender;
	}

	function orderReceivedConfirmed() onlyBuyer public {
		buyer.transfer(value);
		seller.transfer(this.balance);
	}

}
