function getDeliveryContractCode(price){

	var code = getDeliveryContract() +
	getDeliveryVariables() + 
	getDeliveryConstructor(price) +
	getDeliveryModifiers() +
	getDeliveryFunctionConfirmPurchase() + 
	getDeliveryFunctionConfirmReceive() 
		
		return code;
}

function getDeliveryContract() {
	var code = "contract DeliverContract is BaseContract {\n\n";
	return code;
}

function getDeliveryVariables() {
	var code = "\tenum State { Created, Locked, InDelivery, Inactive }\n" +
	"\tState public state;\n" +
	"\n"
	return code;
}

function getDeliveryConstructor(price) {
	var code = "\tfunction DeliverContract()\n" +
	"\tpayable public {\n" +
	"\t\tseller = msg.sender;\n" +
	"\t\tvalue = " + price + ";\n" +
	"\t\tstate = State.Created;\n" +
	"\t\trequire((2 * value) == msg.value);\n" +
	"\t}\n" +
	"\n" 
	return code;
}

function getDeliveryModifiers() {
	var code = "\tmodifier onlyCarrier() {\n" +
	"\t\trequire(msg.sender == buyer);\n" +
	"\t\t_;\n" +
	"\t}\n" +
	"\n"
	return code;
}

function getDeliveryFunctionConfirmPurchase() {
	var code = "\tfunction confirmPurchase()\n" +
	"\tinState(State.Created)\n" +
	"\tpayable public {\n" +
	"\t\tsuper.purchaseOrderReceived();\n" +
	"\t\tstate = State.Locked;\n" +
	"\t}\n" +
	"\n"
		
	return code;
}

function getDeliveryFunctionConfirmReceive() {
	var code = "\tfunction confirmReceived()\n" +
	"\tinState(State.Locked)\n" +
	"\tpublic {\n" +
	"\t\tstate = State.Inactive;\n" +
	"\t\tsuper.orderReceivedConfirmed();\n" +
	"\t}\n" +
	"\n"
		
	return code;
}

function getDeliveryFunctionConfirmInTransit(){
	var code = "\tfunction confirmInTransit() onlyBuyer inState(State.Locked) public {\n" +
	"\t\tstate = State.InDelivery;\n" +
	"\t}\n" +
	"\n"
	return code;
}