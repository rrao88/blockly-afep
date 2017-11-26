'use strict';

goog.provide('Blockly.Solidity.deliver-option');

goog.require('Blockly.Solidity');

Blockly.Solidity['deliver_option'] = function(block) {
	var price = block.getParent().getFieldValue('PRICE');
	return getDeliveryContractCode(price);
};