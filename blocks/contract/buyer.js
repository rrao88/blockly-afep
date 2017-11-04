'use strict';

goog.provide('Blockly.Solidity.buyer');

Blockly.Blocks['contract_buyer'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Buyer")
			.appendField(new Blockly.FieldTextInput("full name"), "FULLNAME")
			.appendField(new Blockly.FieldTextInput("postal address"), "POSTALADDRESS");
		this.setPreviousStatement(true, "contract_buyer");
		this.setColour(270);
		this.setTooltip("This object describes the buyer.");
		this.setHelpUrl("");
	}
};