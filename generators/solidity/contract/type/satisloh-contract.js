'use strict';

goog.provide('Blockly.Solidity.satisloh-contract');

goog.require('Blockly.Solidity');

Blockly.Solidity['satisloh_base'] = function(block) {
	var text_offer_id = block.getFieldValue('offer_id');
	var number_price = block.getFieldValue('price');
	var statements_shipping = Blockly.Solidity.statementToCode(block, 'SHIPPING');
	var statements_payment = Blockly.Solidity.statementToCode(block, 'PAYMENT');
	var statements_extensions = Blockly.Solidity.statementToCode(block, 'EXTENSIONS');
	// TODO: Assemble JavaScript into code variable.
	var code = 'pragma solidity ^0.4.18;\n\n';
	return code;
};