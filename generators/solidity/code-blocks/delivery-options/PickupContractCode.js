function getPickupContractCode(price) {

	function getPickupContract() {
		var code = "contract PickupContract is BaseContract {\n\n";
		return code;
	}

	function getPickupVariables() {
		var code = "\tenum State { Created, Locked, Inactive }\n" +
			"\tState public state;\n" +
			"\n"
		return code;
	}

	function getPickupConstructor(price) {
		var code = "\tfunction PickupContract()\n" +
			"\tpayable\n" +
			"\tpublic {\n" +
			"\t\tseller = msg.sender;\n" +
			"\t\tvalue = " + price + ";\n" +
			"\t\tstate = State.Created;\n" +
			"\t\trequire((2 * value) == msg.value);\n" +
			"\t}\n" +
			"\n"
		return code;
	}

	function getPickupFunctionConfirmPurchase() {
		var code = "\tfunction confirmPurchase()\n" +
			"\tinState(State.Created)\n" +
			"\tpayable public {\n" +
			"\t\tsuper.purchaseOrderReceived();\n" +
			"\t\tstate = State.Locked;\n" +
			"\t}\n" +
			"\n"

		return code;
	}

	function getPickupFunctionConfirmReceive() {
		var code = "\tfunction confirmReceived()\n" +
			"\tinState(State.Locked)\n" +
			"\tpublic {\n" +
			"\t\tstate = State.Inactive;\n" +
			"\t\tsuper.orderReceivedConfirmed();\n" +
			"\t}\n" +
			"\n"

		return code;
	}

	var code = getPickupContract() +
	getPickupVariables() +
	getPickupConstructor(price) +
	getPickupFunctionConfirmPurchase() +
	getPickupFunctionConfirmReceive()
	return code;
}