function getPickupContractCode(name_id, price) {

	function getPickupContract() {
		var code = "contract PickupContract is BaseContract {\n\n" +
			"\t//object on sale: " + name_id + "\n" +
			"\n";
		return code;
	}

	function getPickupVariables() {
		var code = "\tenum State { Created, Locked, Inactive }\n" +
			"\tState public state;\n" +
			"\n";
		return code;
	}

	function getPickupConstructor() {
		var code = "\tfunction PickupContract()\n" +
			"\tpayable\n" +
			"\tpublic {\n" +
			"\t\tseller = msg.sender;\n" +
			"\t\tvalue = " + price + "* 10**18; //Convert from Ether to Wei\n" +
			"\t\tstate = State.Created;\n" +
			"\t\trequire((2 * value) == msg.value);\n" +
			"\t}\n" +
			"\n";
		return code;
	}

	function getPickupModifiers() {
		var code = "\tmodifier inState(State _state) {\n" +
			"\t\trequire(state == _state);\n" +
			"\t\t_;\n" +
			"\t}\n" +
			"\n";
		return code;
	}

	function getPickupFunctionConfirmOrderPlaced() {
		var code = "\tfunction confirmOrderPlaced()\n" +
			"\tinState(State.Created)\n" +
			"\tpayable public {\n" +
			"\t\tsuper.purchaseOrderReceived();\n" +
			"\t\tstate = State.Locked;\n" +
			"\t}\n" +
			"\n";
		return code;
	}

	function getPickupFunctionConfirmOrderCompleted() {
		var code = "\tfunction confirmOrderCompleted()\n" +
			"\tinState(State.Locked)\n" +
			"\tpublic {\n" +
			"\t\tstate = State.Inactive;\n" +
			"\t\tsuper.purchaseOrderCompleted();\n" +
			"\t}\n";
		return code;
	}

	var code = getPickupContract() +
		getPickupVariables() +
		getPickupConstructor() +
		getPickupModifiers() +
		getPickupFunctionConfirmOrderPlaced() +
		getPickupFunctionConfirmOrderCompleted();

	return code;
}