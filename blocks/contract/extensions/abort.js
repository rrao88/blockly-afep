'use strict';

goog.provide('Blockly.Solidity.abort');

Blockly.Blocks['abort_extension'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("is abortable by seller");
		this.setPreviousStatement(true, "contract_extension");
		this.setNextStatement(true, "contract_extension");
		this.setColour(40);
		this.setTooltip("This makes the contract abortable by the seller.");
		this.setHelpUrl("");
	}
};