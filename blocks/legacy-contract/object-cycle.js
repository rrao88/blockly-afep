'use strict';

goog.provide('Blockly.Solidity.object-cycle');


Blockly.Blocks['contract_object'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Cycle")
			.appendField(new Blockly.FieldTextInput("brand"), "BRAND")
			.appendField(new Blockly.FieldTextInput("designation"), "DESIGNATION")
			.appendField(new Blockly.FieldTextInput("chassis number"), "CHASSIS_NR")
			.appendField(new Blockly.FieldTextInput("detail information"), "DETAILS")
			.appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "PRICE");
		this.setPreviousStatement(true, "contract_object");
		this.setColour(300);
		this.setTooltip("This object describes the object on sale.");
		this.setHelpUrl("");
	}
};