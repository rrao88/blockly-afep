'use strict';

goog.provide('Blockly.Solidity.installation-required');

goog.require('Blockly.Solidity');

Blockly.Solidity['installation_required_extension'] = function(block) {
	var code = '\t//Installation required by client;\n';
	return code;
};