'use strict';

goog.provide('Blockly.Solidity.pickup');

Blockly.Blocks['pickup_option'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("pick up");
		this.setPreviousStatement(true, "delivery_option");
		this.setColour(230);
		this.setTooltip("This object represents the \"pick up\" Option");
		this.setHelpUrl("");
	}
};