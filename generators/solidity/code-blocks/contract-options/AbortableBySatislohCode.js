function getAbortableBySatislohCode() {
	
	var code = "\tfunction confirmOrderAborted() inState(State.Created) public {\n" +
		"\t\tsuper.orderAborted();\n" +
		"\t\tstate = State.Inactive;\n" +
		"\t}" + '\n\n';
	return code;
}