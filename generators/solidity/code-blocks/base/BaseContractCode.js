function getBaseContractCode() {

	var code = "contract BaseContract {\n" +
		"\n" +
		"\taddress public seller;\n" +
		"\taddress public buyer;\n" +
		"\tuint public value;\n" +
		"\n" +
		"\tmodifier condition(bool _condition) {\n" +
		"\t\trequire(_condition);\n" +
		"\t\t_;\n" +
		"\t}\n" +
		"\n" +
		"\tmodifier onlyBuyer() {\n" +
		"\t\trequire(msg.sender == buyer);\n" +
		"\t\t_;\n" +
		"\t}\n" +
		"\n" +
		"\tmodifier onlySeller() {\n" +
		"\t\trequire(msg.sender == seller);\n" +
		"\t\t_;\n" +
		"\t}\n" +
		"\n" +
		"\tfunction purchaseOrderReceived()\n" +
		"\tcondition(msg.value == (2 * value)) payable public {\n" +
		"\t\tbuyer = msg.sender;\n" +
		"\t}\n" +
		"\n" +
		"\tfunction orderReceivedConfirmed() onlyBuyer public {\n" +
		"\t\tbuyer.transfer(value);\n" +
		"\t\tseller.transfer(this.balance);\n" +
		"\t}\n" +
		"\n" +
		"}";

	return code;

}