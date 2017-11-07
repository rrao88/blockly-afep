'use strict';

goog.provide('Blockly.Solidity.contract');

Blockly.Blocks['contract_base'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("SALES CONTRACT")
			.appendField(new Blockly.FieldTextInput("Name of this sales contract"), "NAME");
		this.appendDummyInput();
		this.appendDummyInput()
			.appendField("Price of Object in Wei:")
			.appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.01), "PRICE");
		this.appendDummyInput()
			.appendField("Delivery Options:")
			.appendField(new Blockly.FieldDropdown([["pick up", "PICK_UP"], ["deliver", "DELIVER"]]), "DELIVERY_OPTIONS");
		this.appendDummyInput()
			.appendField("Contract is abortable:")
			.appendField(new Blockly.FieldCheckbox("TRUE"), "IS_ABORTABLE");
		this.setColour(230);
		this.setTooltip("");
	}
}