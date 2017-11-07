'use strict';

goog.provide('Blockly.Solidity.contract');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_base'] = function (block) {

	var TAB = '\u00a0\u00a0\u00a0\u00a0';

	var contract_name = block.getFieldValue('NAME');
	var price = block.getFieldValue('PRICE');
	var dropdown_delivery_options = block.getFieldValue('DELIVERY_OPTIONS');
	var checkbox_is_abortable = block.getFieldValue('IS_ABORTABLE') == 'TRUE';

	function getSpecificContractCode() {
		if (dropdown_delivery_options == 'PICK_UP') {
			return getPickupContractCode(price, checkbox_is_abortable);
		}
		return getDeliveryContractCode(price, checkbox_is_abortable);
	}

	var code = 'pragma solidity ^0.4.18;\n\n'

		+ getBaseContractCode(contract_name) + '\n\n'
		+ getSpecificContractCode() + '\n\n'
		+ '}'


	return code;
};