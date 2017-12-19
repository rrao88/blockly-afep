'use strict';

goog.provide('Blockly.Solidity.buyer_pickup_option');

Blockly.Blocks['buyer_pickup_option'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("buyer pickup");
		this.setPreviousStatement(true, "satisloh_shipping_option");
		this.setColour(290);
		this.setTooltip("This object represents the shipping option where the buyer picks up the machine by himself.");
		this.setHelpUrl("");
	}
};