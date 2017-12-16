'use strict';

goog.provide('Blockly.Solidity.deliver-option');

goog.require('Blockly.Solidity');

Blockly.Solidity['deliver_option'] = function(block) {
	var carrier_address = block.getFieldValue('carrier');
	var name_id = block.getParent().getFieldValue('NAME');
	var price = block.getParent().getFieldValue('PRICE');
	return getDeliveryContractCode(name_id, price, carrier_address);
};