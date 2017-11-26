'use strict';

goog.provide('Blockly.Solidity.abort');

goog.require('Blockly.Solidity');

Blockly.Solidity['abort_extension'] = function(block) {
	return getAbortCode();
};