'use strict';

goog.provide('Blockly.Solidity.seller');

Blockly.Blocks['contract_seller'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Seller")
			.appendField(new Blockly.FieldTextInput("name"), "NAME")
			.appendField(new Blockly.FieldTextInput("postal address"), "POSTALADDRESS");
		this.setPreviousStatement(true, "contract_seller");
		this.setColour(230);
		this.setTooltip("This object describes the seller.");
		this.setHelpUrl("");
	}
};