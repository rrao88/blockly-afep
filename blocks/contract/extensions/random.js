'use strict';

goog.provide('Blockly.Solidity.random');

Blockly.Blocks['random_extension'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("random extension");
		this.setPreviousStatement(true, "contract_extension");
		this.setNextStatement(true, "contract_extension");
		this.setColour(270);
		this.setTooltip("This is just for example");
		this.setHelpUrl("");
	}
};