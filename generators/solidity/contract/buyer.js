'use strict';

goog.provide('Blockly.Solidity.seller');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_buyer'] = function(block) {

	var TAB = '\u00a0\u00a0\u00a0\u00a0';
	var buyer_fullname = block.getFieldValue('BUYER_FULLNAME');
	var buyer_postaladdress = block.getFieldValue('BUYER_POSTALADDRESS');

	var code =  TAB + '/* Buyer Info\n' +
				TAB + '   Name: ' + buyer_fullname + '\n' +
				TAB + '   Address: ' + buyer_postaladdress + '\n' +
				TAB + '*/\n\n' +
				TAB + 'function confirmPurchase() inState(State.Created)\n' +
				TAB + '  condition(msg.value == (2 * value)) payable public {\n' +
				TAB + TAB + 'buyer = msg.sender;\n' +
				TAB + TAB + 'state = State.Locked;\n' +
				TAB + '}\n\n' +
				TAB + 'function confirmReceived() onlyBuyer inState(State.Locked) public {\n' +
				TAB + TAB + 'state = State.Inactive;\n' +
				TAB + TAB + 'buyer.transfer(value);\n' +
				TAB + TAB + 'seller.transfer(this.balance);\n' +
				TAB + '}\n';

	return code;
};