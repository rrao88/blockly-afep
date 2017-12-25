'use strict';

goog.provide('Blockly.Solidity.upfrontPayment-option');

goog.require('Blockly.Solidity');

Blockly.Solidity['payment_100upfront_option'] = function(block) {
	var offer_id = block.getParent().getFieldValue('offer_id');
	var price = block.getParent().getFieldValue('price');

	//options are satisloh_carrier, buyer_carrier, buyer_pickup
	var shipping_option = block.getParent().getFieldValue('shipping');
	var interface_to_implement = (shipping_option === 'satisloh_carrier') ? InterfaceEnum.SatislohDelivery : InterfaceEnum.BuyerOnOwn;

	return getUpfrontPaymentCode(offer_id, price, interface_to_implement);
};