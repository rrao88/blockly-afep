'use strict';

goog.provide('Blockly.Solidity.satisloh-contract');

goog.require('Blockly.Solidity');

Blockly.Solidity['satisloh_base'] = function(block) {
	var payment_option = Blockly.Solidity.statementToCode(block, 'PAYMENT');
	var contract_extensions = Blockly.Solidity.statementToCode(block, 'EXTENSIONS');


	var code = 'pragma solidity ^0.4.18;\n\n'
		+ getSatislohBaseContractCode() + '\n\n'
		+ payment_option + '\n'
		+ contract_extensions
		+ '}';

	return code;
};