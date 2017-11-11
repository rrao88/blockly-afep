function getDeliveryContractCode(price, isAbortable){
//TESTcommit
	var code = "contract DeliverContract is BaseContract {\n" +
		"\n" +
		"\tenum State { Created, Locked, InDelivery, Inactive }\n" +
		"\tState public state;\n" +
		"\n" +
		"\tmodifier inState(State _state) {\n" +
		"\t\trequire(state == _state);\n" +
		"\t\t_;\n" +
		"\t}\n" +
		"\n" +
		"\tfunction DeliverContract() payable public {\n" +
		"\t\tseller = msg.sender;\n" +
		"\t\tvalue = " + price + ";\n" +
		"\t\tstate = State.Created;\n" +
		"\t\trequire((2 * value) == msg.value);\n" +
		"\t}\n" +
		"\n" +
		"\tmodifier onlyCarrier() {\n" +
		"\t\trequire(msg.sender == buyer);\n" +
		"\t\t_;\n" +
		"\t}\n" +
		"\n" +
		"\tfunction confirmPurchase() inState(State.Created) payable public {\n" +
		"\t\tsuper.purchaseOrderReceived();\n" +
		"\t\tstate = State.Locked;\n" +
		"\t}\n" +
		"\n" +
		"\tfunction confirmReceived() inState(State.InDelivery) public {\n" +
		"\t\tstate = State.Inactive;\n" +
		"\t\tsuper.orderReceivedConfirmed();\n" +
		"\t}\n" +
		"\n" +
		"\tfunction confirmInTransit() onlyBuyer inState(State.Locked) public {\n" +
		"\t\tstate = State.InDelivery;\n" +
		"\t}\n" +
		"\n" +
		"}";

}