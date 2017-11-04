'use strict';

goog.provide('Blockly.Solidity.seller');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_seller'] = function (block) {

	var TAB = '\u00a0\u00a0\u00a0\u00a0';
	var seller_name = block.getFieldValue('NAME');
	var seller_postaladdress = block.getFieldValue('POSTALADDRESS');

	var code =  TAB + '/* Seller Info\n' +
				TAB + '   Name: ' + seller_name + '\n' +
				TAB + '   Address: ' + seller_postaladdress + '\n' +
				TAB + '*/\n';

	return code;
};