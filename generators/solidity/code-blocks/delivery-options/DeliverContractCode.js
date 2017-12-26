function getDeliveryContractCode(name_id, price, carrier_address) {

	function getDeliveryContract() {
		var code = "contract DeliverContract is BaseContract {\n\n" +
			"\t//object on sale: " + name_id + "\n" +
			"\n";
		return code;
	}

	function getDeliveryVariables() {
		var code = "\tenum State { Created, Locked, InDelivery, Inactive }\n" +
			"\tState public state;\n" +
			"\n" +
			"\taddress public carrier = " + carrier_address + "; //Ethereum address of the carrier\n" +
			"\n";
		return code;
	}

	function getDeliveryConstructor() {
		var code = "\tfunction DeliverContract()\n" +
			"\tpayable public {\n" +
			"\t\tseller = msg.sender;\n" +
			"\t\tvalue = " + price + "* 10**18; //Convert from Ether to Wei\n" +
			"\t\tstate = State.Created;\n" +
			"\t\trequire((2 * value) == msg.value);\n" +
			"\t}\n" +
			"\n";
		return code;
	}

	function getDeliveryModifiers() {
		var code = "\tmodifier inState(State _state) {\n" +
			"\t\trequire(state == _state);\n" +
			"\t\t_;\n" +
			"\t}\n" +
			"\n" +
			"\tmodifier onlyCarrier() {\n" +
			"\t\trequire(msg.sender == carrier);\n" +
			"\t\t_;\n" +
			"\t}\n" +
			"\n";
		return code;
	}

	function getDeliveryEvents() {
		var code = "\tevent DeliverOrder();\n\n";
		return code;
	}

	function getDeliveryFunctionConfirmOrderPlaced() {
		var code = "\tfunction confirmOrderPlaced() inState(State.Created) payable public {\n" +
			"\t\tDeliverOrder();\n" +
			"\t\tsuper.purchaseOrderReceived();\n" +
			"\t\tstate = State.Locked;\n" +
			"\t}\n" +
			"\n";
		return code;
	}

	function getDeliveryFunctionConfirmOrderInDelivery() {
		var code = "\tfunction confirmOrderInDelivery() onlyCarrier inState(State.Locked) public {\n" +
			"\t\tstate = State.InDelivery;\n" +
			"\t}\n\n";
		return code;
	}

	function getDeliveryFunctionConfirmOrderCompleted() {
		var code = "\tfunction confirmOrderCompleted() inState(State.InDelivery) public {\n" +
			"\t\tstate = State.Inactive;\n" +
			"\t\tsuper.purchaseOrderCompleted();\n" +
			"\t}";
		return code;
	}


	var code = getDeliveryContract() +
		getDeliveryVariables() +
		getDeliveryConstructor() +
		getDeliveryModifiers() +
		getDeliveryEvents() +
		getDeliveryFunctionConfirmOrderPlaced() +
		getDeliveryFunctionConfirmOrderInDelivery() +
		getDeliveryFunctionConfirmOrderCompleted();

	return code;
}