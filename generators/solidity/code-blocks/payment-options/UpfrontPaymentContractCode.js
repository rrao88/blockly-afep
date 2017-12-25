function getUpfrontPaymentCode(offer_id, price, interface_to_implement) {

	function getContractHeader() {
		var code = "contract UpfrontPaymentContract is SatislohBaseContract" +
			" {\n\n" +
			"\t//Machine-ID: " + offer_id + "\n\n";

		return code;
	}

	function getContractState() {
		var code = "";
		if (interface_to_implement === InterfaceEnum.SatislohDelivery) {
			code = "\tenum State { Created, Ordered, Produced, InDelivery, Received, Inactive }\n";
		} else {
			code = "\tenum State { Created, Ordered, Produced, Received, Inactive }\n";
		}

		return code;
	}

	function getContractVariables() {
		var code = "\tState public state;\n" +
			"\tuint public value;\n\n";

		return code;
	}

	function getContractConstructor() {

		var code = "\tfunction UpfrontPaymentContract() public {\n" +
			"\t\tseller = msg.sender;\n" +
			"\t\tcarrier = 0xdd870fa1b7c4700f2bd7f44238821c26f7392148;\n" +
			"\t\tvalue = " + price + " * 10**18; //convert from Ether to Wei\n" +
			"\t\tstate = State.Created;\n" +
			"\t}\n\n";

		return code;
	}

	function getContractModifier() {
		var code = "\tmodifier inState(State _state) {\n" +
			"\t\trequire(state == _state);\n" +
			"\t\t_;\n" +
			"\t}\n" +
			"\n" +
			"\tmodifier condition(bool _condition) {\n" +
			"\t\trequire(_condition);\n" +
			"\t\t_;\n" +
			"\t}\n\n";

		return code;
	}

	function getContractEvents() {

		var code = "";
		if (interface_to_implement === InterfaceEnum.SatislohDelivery) {
			code += "\tevent DeliverOrder();\n";
		}

		code += "\n";

		return code;
	}

	function getContractConfirmOrderPlaced() {

		var code = "\tfunction confirmOrderPlaced() inState(State.Created) condition(value == msg.value) payable public {\n" +
			"\t\tsuper.orderPlaced();\n" +
			"\t\tstate = State.Ordered;\n" +
			"\t\tseller.transfer(this.balance);\n" +
			"\t}\n\n";

		return code;
	}

	function getContractConfirmOrderProduced() {
		var code = "\tfunction confirmOrderProduced() inState(State.Ordered) public {\n" +
			"\t\tsuper.orderProduced();\n" +
			"\t\tstate = State.Produced;\n" +
			"\t}\n\n";

		return code;
	}

	function getContractConfirmOrderInDelivery() {
		var code = "";
		if (interface_to_implement === InterfaceEnum.SatislohDelivery) {
			code = "\tfunction confirmOrderInDelivery() inState(State.Produced) public {\n" +
				"\t\tsuper.orderInDelivery();\n" +
				"\t\tstate = State.InDelivery;\n" +
				"\t}\n\n";
		}

		return code;
	}

	function getContractConfirmOrderReceived() {
		var state = "Produced";
		if (interface_to_implement === InterfaceEnum.SatislohDelivery) {
			state = "InDelivery";
		}

		var code = "\tfunction confirmOrderReceived() inState(State." + state + ") public {\n" +
			"\t\tsuper.orderReceived();\n" +
			"\t\tstate = State.Received;\n" +
			"\t}\n\n";

		return code;
	}

	function getContractConfirmOrderCompleted() {
		var code = "\tfunction confirmOrderCompleted() inState(State.Received) public {\n" +
			"\t\tsuper.orderCompleted();\n" +
			"\t\tstate = State.Inactive;\n" +
			"\t}\n\n";

		return code;
	}

	var code = getContractHeader() +
		getContractState() +
		getContractVariables() +
		getContractConstructor() +
		getContractModifier() +
		getContractEvents() +
		getContractConfirmOrderPlaced() +
		getContractConfirmOrderProduced() +
		getContractConfirmOrderInDelivery() +
		getContractConfirmOrderReceived() +
		getContractConfirmOrderCompleted();

	return code;
}