'use strict';

goog.provide('Blockly.Solidity.deliver');

Blockly.Blocks['deliver_option'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("deliver")
			.appendField(new Blockly.FieldDropdown([["Post","post_ethereum_address"], ["DHL","dhl_ethereum_address"]]), "carrier");
		this.setPreviousStatement(true, "delivery_option");
		this.setColour(230);
		this.setTooltip("This object represents the \"deliver\" Option");
		this.setHelpUrl("");
	}
};