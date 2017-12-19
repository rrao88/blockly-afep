'use strict';

goog.provide('Blockly.Solidity.installation_required');

Blockly.Blocks['installation_required_extension'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("installation by Satisloh required");
		this.setPreviousStatement(true, "satisloh_extension");
		this.setNextStatement(true, "satisloh_extension");
		this.setColour(40);
		this.setTooltip("This defines if the buyers wants Satisloh to install the machine as well.");
		this.setHelpUrl("");
	}
};

