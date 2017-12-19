'use strict';

goog.provide('Blockly.Solidity.payment_306010_option');

Blockly.Blocks['payment_306010_option'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("30")
			.appendField("/")
			.appendField("60")
			.appendField("/")
			.appendField("10");
		this.setPreviousStatement(true, "satisloh_payment_option");
		this.setColour(270);
		this.setTooltip("\"This object represents the installment payment option of first 30% then 60% and finally 10%.\"");
		this.setHelpUrl("");
	}
};