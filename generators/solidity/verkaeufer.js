'use strict';

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_verkaeufer'] = function (block) {
	var text_verkaeufer_id = block.getFieldValue('VERKAEUFER_ID');
	var text_verkaeufer_name = block.getFieldValue('VERKAEUFER_NAME');
	var text_adresse = block.getFieldValue('ADRESSE');

	var code = '\u00a0struct Verkaeufer {\n'
		+ '\u00a0\u00a0\u00a0address verkaeufer;\n'
		+ '\u00a0\u00a0\u00a0string name;\n'
		+ '\u00a0\u00a0\u00a0string adresse;\n'
		+ '\u00a0}\n';

	return code;
};