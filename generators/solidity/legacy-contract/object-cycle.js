'use strict';

goog.provide('Blockly.Solidity.object-cycle');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_object'] = function(block) {
	var text_brand = block.getFieldValue('BRAND');
	var text_designation = block.getFieldValue('DESIGNATION');
	var text_chassis_nr = block.getFieldValue('CHASSIS_NR');
	var text_details = block.getFieldValue('DETAILS');
	var number_price = block.getFieldValue('PRICE');
	// TODO: Assemble JavaScript into code variable.
	var code = '...;\n';
	return code;
};
