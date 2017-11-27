'use strict';

goog.provide('Blockly.Solidity.pickup-option');

goog.require('Blockly.Solidity');

Blockly.Solidity['pickup_option'] = function(block) {
	var name_id = block.getParent().getFieldValue('NAME');
	var price = block.getParent().getFieldValue('PRICE');
	return getPickupContractCode(name_id, price);
};