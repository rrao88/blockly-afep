pragma solidity ^0.4.0;


contract SatislohBaseContract {

	address public seller;
	address public buyer;
	address public carrier;
	uint public value;

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

	function orderPlaced() view internal {
		buyer = msg.sender;
	}

	function orderProduced() onlySeller view internal {}

	function secondInstallmentPaid() onlyBuyer view internal {}

	function orderInDelivery() onlyCarrier view internal {}

	function orderReceived() onlyBuyer view internal {}

	function orderCompleted() onlyBuyer view internal {}

	function orderAborted() onlySeller view internal {}

}
