'use strict';

goog.provide('Blockly.Solidity.random');

goog.require('Blockly.Solidity');

Blockly.Solidity['random_extension'] = function(block) {

	var code = "\tfunction random()\n" +
		"\tonlySeller\n" +
		"\tinState(State.Created) {\n" +
		"\t\tstate = State.Inactive;\n" +
		"\t}" + '\n\n';

	return code;
};