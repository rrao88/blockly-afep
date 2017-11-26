function getAbortCode() {
	
	var code = "\tfunction abort()\n" +
	"\tonlySeller\n" +
	"\tinState(State.Created) {\n" +
	"\t\tstate = State.Inactive;\n" +
	"\t\tseller.transfer(this.balance);\n" +
	"\t}" + '\n\n';
	return code;
}