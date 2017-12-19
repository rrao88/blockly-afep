'use strict';

goog.provide('Blockly.Solidity.satisloh_carrier_option');

Blockly.Blocks['satisloh_carrier_option'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("satisloh carrier delivery");
		this.setPreviousStatement(true, "satisloh_shipping_option");
		this.setColour(290);
		this.setTooltip("This object represents the shipping option where Satisloh's carrier of choice is asked to delivery the machine.");
		this.setHelpUrl("");
	}
};