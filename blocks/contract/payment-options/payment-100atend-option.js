'use strict';

goog.provide('Blockly.Solidity.payment_100atend_option');

Blockly.Blocks['payment_100atend_option'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("0")
			.appendField("/")
			.appendField("0")
			.appendField("/")
			.appendField("100");
		this.setPreviousStatement(true, "satisloh_payment_option");
		this.setColour(345);
		this.setTooltip("\"This object represents the installment payment option where the whole amount is paid at the end.\"");
		this.setHelpUrl("");
	}
};