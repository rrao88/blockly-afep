'use strict';

goog.provide('Blockly.Solidity.abort');

Blockly.Blocks['abort_extension'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("is abortable");
		this.setPreviousStatement(true, "contract_extension");
		this.setNextStatement(true, "contract_extension");
		this.setColour(270);
		this.setTooltip("This makes the contract abortable by the seller.");
		this.setHelpUrl("");
	}
};