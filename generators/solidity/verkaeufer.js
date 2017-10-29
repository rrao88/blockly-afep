/**
 * @fileoverview Helper functions for generating Solidity for blocks.
 */
'use strict';

goog.provide('Blockly.Solidity.verkaeufer');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_verkaeufer'] = function (block) {

	var TAB = '\u00a0\u00a0\u00a0\u00a0';
	var text_verkaeufer_id = block.getFieldValue('VERKAEUFER_ID');
	var text_verkaeufer_name = block.getFieldValue('VERKAEUFER_NAME');
	var text_adresse = block.getFieldValue('ADRESSE');

	var code = TAB + 'struct Verkaeufer {\n'
		+ TAB + TAB + 'address verkaeufer;\n'
		+ TAB + TAB + 'string name;\n'
		+ TAB + TAB + 'string adresse;\n'
		+ TAB + '}\n\n';

	return code;
};