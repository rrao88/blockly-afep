function getSatislohBaseContractCode() {

	var code = "contract SatislohBaseContract {\n" +
		"\n" +
		"\taddress public seller;\n" +
		"\taddress public buyer;\n" +
		"\taddress public carrier;\n" +
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
		"\tmodifier onlyCarrier() {\n" +
		"\t\trequire(msg.sender == carrier);\n" +
		"\t\t_;\n" +
		"\t}\n" +
		"\n" +
		"\tfunction orderPlaced() internal {\n" +
		"\t\tbuyer = msg.sender;\n" +
		"\t}\n" +
		"\n" +
		"\tfunction orderProduced() onlySeller view internal {}\n" +
		"\n" +
		"\tfunction secondInstallmentPaid() onlyBuyer view internal {}\n" +
		"\n" +
		"\tfunction orderInDelivery() onlyCarrier view internal {}\n" +
		"\n" +
		"\tfunction orderReceived() onlyBuyer view internal {}\n" +
		"\n" +
		"\tfunction orderCompleted() onlyBuyer view internal {}\n" +
		"\n" +
		"\tfunction orderAborted() onlySeller view internal {}\n" +
		"\n" +
		"}";

	return code;

}