'use strict';

goog.provide('Blockly.Solidity.seller');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_buyer'] = function(block) {

	var TAB = '\u00a0\u00a0\u00a0\u00a0';
	var buyer_fullname = block.getFieldValue('FULLNAME');
	var buyer_postaladdress = block.getFieldValue('POSTALADDRESS');

	var code =  TAB + '/* Buyer Info\n' +
				TAB + '   Name: ' + buyer_fullname + '\n' +
				TAB + '   Address: ' + buyer_postaladdress + '\n' +
				TAB + '*/\n';

	return code;
};