'use strict';

goog.provide('Blockly.Solidity.payment_100upfront_option');

Blockly.Blocks['payment_100upfront_option'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("100")
			.appendField("/")
			.appendField("0")
			.appendField("/")
			.appendField("0");
		this.setPreviousStatement(true, "satisloh_payment_option");
		this.setColour(270);
		this.setTooltip("\"This object represents the upfront payment option where the whole amount is paid at the start.\"");
		this.setHelpUrl("");
	}
};