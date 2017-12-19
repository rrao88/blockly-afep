'use strict';

goog.provide('Blockly.Solidity.buyer_carrier_option');

Blockly.Blocks['buyer_carrier_option'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("buyer carrier delivery");
		this.setPreviousStatement(true, "satisloh_shipping_option");
		this.setColour(290);
		this.setTooltip("This object represents the shipping option where the buyer asks his carrier of choice to delivery the machine.");
		this.setHelpUrl("");
	}
};