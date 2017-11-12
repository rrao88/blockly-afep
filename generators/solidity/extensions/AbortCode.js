function getAbortCode() {
	
	var code = "function abort()\n" +
	"\tonlySeller\n" +
	"\tinState(State.Created) {\n" +
	"\t\tstate = State.Inactive;\n" +
	"\t\tseller.transfer(this.balance);\n" +
	"\t}\n"
	return code;
}