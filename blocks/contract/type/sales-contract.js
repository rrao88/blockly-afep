'use strict';

goog.provide('Blockly.Solidity.sales-contract');

Blockly.Blocks['contract_base'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("SALES CONTRACT");
		this.appendDummyInput()
			.appendField("Object on sale:")
			.appendField(new Blockly.FieldTextInput("Name or ID"), "NAME");
		this.appendDummyInput()
			.appendField("Price in Ether:")
			.appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "PRICE");
		this.appendStatementInput("DELIVERY OPTIONS")
			.setCheck("delivery_option")
			.appendField("Delivery Option:");
		this.appendStatementInput("CONTRACT EXTENSIONS")
			.setCheck("contract_extension")
			.appendField("Contract Options:");
		this.setColour(160);
		this.setTooltip("This object is the mantle of the contract.");
		this.setHelpUrl("");
	}
};