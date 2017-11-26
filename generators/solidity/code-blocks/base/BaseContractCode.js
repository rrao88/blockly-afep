function getBaseContractCode(contract_name) {

	var code = "contract BaseContract {\n" +
		"\tenum State { Created, Locked, Inactive }\n" +
		"\n" +
		"\taddress public seller;\n" +
		"\taddress public buyer;\n" +
		"\tuint public value;\n" +
		"\tState public state;\n" +
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
		"\tmodifier inState(State _state) {\n" +
		"\t\trequire(state == _state);\n" +
		"\t\t_;\n" +
		"\t}\n" +
		"\n" +
		"\tfunction confirmPurchase() inState(State.Created)\n" +
		"\tcondition(msg.value == (2 * value)) payable public {\n" +
		"\t\tbuyer = msg.sender;\n" +
		"\t\tstate = State.Locked;\n" +
		"\t}\n" +
		"\n" +
		"\tfunction confirmReceived() onlyBuyer inState(State.Locked) public {\n" +
		"\t\tstate = State.Inactive;\n" +
		"\t\tbuyer.transfer(value);\n" +
		"\t\tseller.transfer(this.balance);\n" +
		"\t}\n" +
		"\n" +
		"}\n"

	return code;

}