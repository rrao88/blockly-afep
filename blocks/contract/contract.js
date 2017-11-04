'use strict';

goog.provide('Blockly.Solidity.contract');

Blockly.Blocks['contract_main'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("SALES CONTRACT")
			.appendField(new Blockly.FieldTextInput("Name of this sales contract"), "NAME");
		this.appendDummyInput();
		this.appendStatementInput("SELLER")
			.setCheck("contract_seller")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Seller");
		this.appendStatementInput("OBJECT")
			.setCheck("contract_object")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Object");
		this.appendStatementInput("BUYER")
			.setCheck("contract_buyer")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Buyer");
		this.appendStatementInput("CARRIER")
			.setCheck("contract_carrier")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Carrier");
		this.setColour(159);
		this.setTooltip("This object is the mantle of the contract.");
		this.setHelpUrl("");
	}
};