function getAbortCode() {
	
	var code = "\tfunction confirmOrderAborted()\n" +
	"\tonlySeller\n" +
	"\tinState(State.Created)\n" +
	"\tpublic {\n" +
	"\t\tstate = State.Inactive;\n" +
	"\t\tseller.transfer(this.balance);\n" +
	"\t}" + '\n\n';
	return code;
}