/**
 * @fileoverview Helper functions for generating Solidity for blocks.
 */
'use strict';

goog.provide('Blockly.Solidity.seller');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_seller'] = function (block) {

	var TAB = '\u00a0\u00a0\u00a0\u00a0';
	var seller_name = block.getFieldValue('SELLER_NAME');
	var seller_address = block.getFieldValue('SELLER_POSTALADDRESS');

	var code =  TAB + '/* Seller Info\n' +
				TAB + '   Name: ' + seller_name + '\n' +
				TAB + '   Address: ' + seller_address + '\n' +
				TAB + '*/\n';

	return code;
};