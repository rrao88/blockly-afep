'use strict';

goog.provide('Blockly.Solidity.verkaeufer');

Blockly.Blocks['contract_verkaeufer'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Verkäufer")
			.appendField(new Blockly.FieldTextInput("id"), "VERKAEUFER_ID")
			.appendField(new Blockly.FieldTextInput("firmenname"), "VERKAEUFER_NAME")
			.appendField(new Blockly.FieldTextInput("adresse"), "ADRESSE");
		this.setPreviousStatement(true, "contract_main");
		this.setColour(230);
		this.setTooltip("Dieses Objekt bildet den Verkäufer ab.");
		this.setHelpUrl("");
	}
};