'use strict';

goog.provide('Blockly.Solidity.deliver');

Blockly.Blocks['deliver_option'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("deliver");
		this.setPreviousStatement(true, "delivery_option");
		this.setColour(230);
		this.setTooltip("This object represents the \"deliver\" Option");
		this.setHelpUrl("");
	}
};