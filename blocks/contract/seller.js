'use strict';

goog.provide('Blockly.Solidity.seller');

Blockly.Blocks['contract_seller'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Seller")
			.appendField(new Blockly.FieldTextInput("name"), "SELLER_NAME")
			.appendField(new Blockly.FieldTextInput("postal address"), "SELLER_POSTALADDRESS");
		this.setPreviousStatement(true, "contract_seller");
		this.setColour(230);
		this.setTooltip("This object describes the seller.");
		this.setHelpUrl("");
	}
};