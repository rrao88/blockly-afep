function getPickupContractVarCode() {
	var code = "contract PickupContract is BaseContract {\n" +
	"\n" +
	"\tenum State { Created, Locked, Inactive }\n" +
	"\tState public state;\n" +
	"\n"
	return code;
}

function getPickupContractConstrCode(price) {
	var code = "\tfunction PickupContract()\n" + 
	"\tpayable\n" +
	"\tpublic {\n" +
	"\t\tseller = msg.sender;\n" +
	"\t\tvalue = " + price + ";\n" +
	"\t\tstate = State.Created;\n" +
	"\t\trequire((2 * value) == msg.value);\n" +
	"\t}\n" +
	"\n";
		
	return code;
}

function getPickupContractConfPurCode() {
	var code = "\tfunction confirmPurchase()\n" +
	"\tinState(State.Created)\n" +
	"\tpayable public {\n" +
	"\t\tsuper.purchaseOrderReceived();\n" +
	"\t\tstate = State.Locked;\n" +
	"\t}\n" +
	"\n";
		
	return code;
}

function getPickupContractConfRecCode() {
	var code = "\tfunction confirmReceived()\n" +
	"\tinState(State.Locked)\n" +
	"\tpublic {\n" +
	"\t\tstate = State.Inactive;\n" +
	"\t\tsuper.orderReceivedConfirmed();\n" +
	"\t}\n" +
	"\n";
		
	return code;
}

function getPickupContractCode(price, isAbortable) {

	var code = "contract PickupContract is BaseContract {\n" +
		"\n" +
		"\tenum State { Created, Locked, Inactive }\n" +
		"\tState public state;\n" +
		"\n" +
		"\tfunction PickupContract()\n" + 
		"\tpayable public {\n" +
		"\t\tseller = msg.sender;\n" +
		"\t\tvalue = " + price + ";\n" +
		"\t\tstate = State.Created;\n" +
		"\t\trequire((2 * value) == msg.value);\n" +
		"\t}\n" +
		"\n" +
		"\tfunction confirmPurchase() inState(State.Created) payable public {\n" +
		"\t\tsuper.purchaseOrderReceived();\n" +
		"\t\tstate = State.Locked;\n" +
		"\t}\n" +
		"\n" +
		"\tfunction confirmReceived() inState(State.Locked) public {\n" +
		"\t\tstate = State.Inactive;\n" +
		"\t\tsuper.orderReceivedConfirmed();\n" +
		"\t}\n" +
		"\n" +
		"}";

	return code;

}