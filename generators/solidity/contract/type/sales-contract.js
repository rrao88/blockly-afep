'use strict';

goog.provide('Blockly.Solidity.sales-contract');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_base'] = function (block) {

	var delivery_option = Blockly.Solidity.statementToCode(block, 'DELIVERY OPTIONS');
	var contract_extensions = Blockly.Solidity.statementToCode(block, 'CONTRACT EXTENSIONS');

	var code = 'pragma solidity ^0.4.18;\n\n'

		+ getBaseContractCode() + '\n\n'
		+ delivery_option + '\n'
		+ contract_extensions
		+ '}';


	return code;
};