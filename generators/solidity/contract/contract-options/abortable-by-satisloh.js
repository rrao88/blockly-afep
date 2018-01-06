'use strict';

goog.provide('Blockly.Solidity.abortable-by-satisloh');

goog.require('Blockly.Solidity');

Blockly.Solidity['abortable_by_satisloh_extension'] = function(block) {
	return getAbortableBySatislohCode();
};