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
			return getPickupContractCode(price);
		} else
		if (dropdown_delivery_options == 'DELIVER'){
			return getDeliveryContractCode(price);
			}
	}
	
	function getExtensionCode(){
		var extensionsCode = "//Extensions\n\n";
		
		if(checkbox_is_abortable){
			extensionsCode += getAbortCode();
		}
		
		return extensionsCode;
	}

	var code = 'pragma solidity ^0.4.18;\n\n'

		+ getBaseContractCode(contract_name) + '\n\n'
		+ getSpecificContractCode() + '\n\n'
		+ getExtensionCode() + '\n\n'
		+ '}'


	return code;
};