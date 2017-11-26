'use strict';

goog.provide('Blockly.Solidity.sales-contract');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_base'] = function (block) {

	var contract_name = block.getFieldValue('NAME');
	var delivery_option = Blockly.Solidity.statementToCode(block, 'DELIVERY OPTIONS');
	var contract_extensions = Blockly.Solidity.statementToCode(block, 'CONTRACT EXTENSIONS');

	var code = 'pragma solidity ^0.4.18;\n\n'

		+ getBaseContractCode(contract_name) + '\n\n'
		+ delivery_option + '\n'
		+ contract_extensions
		+ '}';


	return code;
};