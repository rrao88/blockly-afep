'use strict';

goog.provide('Blockly.Solidity.abortable_by_satisloh');

Blockly.Blocks['abortable_by_satisloh_extension'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("abortable by Satisloh");
		this.setPreviousStatement(true, "satisloh_extension");
		this.setNextStatement(true, "satisloh_extension");
		this.setColour(40);
		this.setTooltip("This defines if Satisloh may pull back their offer and abort the contract.");
		this.setHelpUrl("");
	}
};