'use strict';

goog.provide('Blockly.Solidity.contract');

Blockly.Blocks['contract_base'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("SALES CONTRACT")
			.appendField(new Blockly.FieldTextInput("Name of the object on sale"), "NAME");
		this.appendDummyInput();
		this.appendDummyInput()
			.appendField("Price of Object in Wei:")
			.appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.01), "PRICE");
		this.appendStatementInput("DELIVERY OPTIONS")
			.setCheck("delivery_option")
			.appendField("Delivery Option:");
		this.appendStatementInput("CONTRACT EXTENSIONS")
			.setCheck("contract_extension")
			.appendField("Contract Extensions:");
		this.setColour(160);
		this.setTooltip("This object is the mantle of the contract.");
		this.setHelpUrl("");
	}
};