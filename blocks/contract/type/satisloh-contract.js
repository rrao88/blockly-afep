'use strict';

goog.provide('Blockly.Solidity.satisloh-contract');

Blockly.Blocks['satisloh_base'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("SATISLOH MACHINE CONTRACT");
		this.appendDummyInput()
			.appendField("Offer ID:")
			.appendField(new Blockly.FieldTextInput("id of the offer"), "offer_id");
		this.appendDummyInput()
			.appendField("Price in Ether:")
			.appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.0), "price");
		this.appendDummyInput()
			.appendField("Shipping Options:")
			.appendField(new Blockly.FieldDropdown([["Satisloh Carrier","satisloh_carrier"], ["Buyer Carrier","buyer_carrier"], ["Buyer Pickup","buyer_pickup"]]), "shipping");
		this.appendStatementInput("PAYMENT")
			.setCheck("satisloh_payment_option")
			.appendField("Payment Option:");
		this.appendStatementInput("EXTENSIONS")
			.setCheck("satisloh_extension")
			.appendField("Contract Extensions:");
		this.setColour(160);
		this.setTooltip("This object is the mantle of the satisloh machine contract.");
		this.setHelpUrl("");
	}
};