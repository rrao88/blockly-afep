'use strict';

goog.provide('Blockly.Solidity.contract');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_main'] = function (block) {

	var TAB = '\u00a0\u00a0\u00a0\u00a0';

	var contract_name = block.getFieldValue('NAME').replace(/\ /g, "_");
	var statements_seller = Blockly.Solidity.statementToCode(block, 'SELLER');
	var statements_object = Blockly.Solidity.statementToCode(block, 'OBJECT');
	var statements_buyer = Blockly.Solidity.statementToCode(block, 'BUYER');
	var statements_carrier = Blockly.Solidity.statementToCode(block, 'CARRIER');

	function createStateEnum() {
		return TAB + 'enum State { Created, Locked, Inactive }\n\n';
	}

	function createVariableDeclarations() {
		return TAB + 'address public seller;\n'
			+ TAB + 'address public buyer;\n'
			+ TAB + 'uint public price;\n'
			+ TAB + 'State public state\n\n';
	}

	function appendGeneratedBlockCode() {

		var genCode = "";

		if (statements_seller) {
			genCode += statements_seller + '\n\n';
		}
		if (statements_object) {
			genCode += statements_object + '\n\n';
		}
		if (statements_buyer) {
			genCode += statements_buyer + '\n\n';
		}
		if (statements_carrier) {
			genCode += statements_carrier + '\n\n';
		}

		return genCode;
	}

	function createConstructor() {
		return TAB + 'function ' + contract_name + '() payable public {\n'
			+ TAB + TAB + 'seller = msg.sender;\n'
			+ TAB + TAB + 'price = msg.value / 2;\n'
			+ TAB + TAB + 'state = State.Created;\n'
			+ TAB + TAB + 'require((2 * price) == msg.value);\n'
			+ TAB + '}\n\n';
	}

	function createModifiers() {
		return TAB + 'modifier condition(bool _condition) {\n'
			+ TAB + TAB + 'require(_condition);\n'
			+ TAB + TAB + '_;\n'
			+ TAB + '}\n\n'
			// only Buyer
			+ TAB + 'modifier onlyBuyer() {\n'
			+ TAB + TAB + 'require(msg.sender == buyer);\n'
			+ TAB + TAB + '_;\n'
			+ TAB + '}\n\n'
			// only seller
			+ TAB + 'modifier onlySeller() {\n'
			+ TAB + TAB + 'require(msg.sender == seller);\n'
			+ TAB + TAB + '_;\n'
			+ TAB + '}\n\n'
			// in state
			+ TAB + 'modifier inState(State _state) {\n'
			+ TAB + TAB + 'require(state == _state);\n'
			+ TAB + TAB + '_;\n'
			+ TAB + '}\n\n'
	}

	function createPurchaseFunction() {
		return TAB + 'function confirmPurchase() inState(State.Created)\n' +
			TAB + '  condition(msg.value == (2 * value)) payable public {\n' +
			TAB + TAB + 'buyer = msg.sender;\n' +
			TAB + TAB + 'state = State.Locked;\n' +
			TAB + '}\n\n';
	}

	function createReceiveConfirmationFunction() {
		return TAB + 'function confirmReceived() onlyBuyer inState(State.Locked) public {\n' +
			TAB + TAB + 'state = State.Inactive;\n' +
			TAB + TAB + 'buyer.transfer(value);\n' +
			TAB + TAB + 'seller.transfer(this.balance);\n' +
			TAB + '}\n\n';
	}

	function createAbortFunction() {
		return TAB + 'function abortSale() onlySeller inState(State.Created) public {\n' +
			TAB + TAB + 'state = State.Inactive;\n' +
			TAB + TAB + 'seller.transfer(this.balance);\n' +
			TAB + '}\n\n';
	}

	var code = 'pragma solidity ^0.4.18;\n\n'

		// Begin of contract
		+ 'contract ' + contract_name + ' {\n\n'

		// State enum definition
		+ createStateEnum()

		// Variable declaration
		+ createVariableDeclarations()

		// Generated Sub-Block Code
		+ appendGeneratedBlockCode()

		// Constructor
		+ createConstructor()

		// Modifiers
		+ createModifiers()

		// Functions
		+ createPurchaseFunction()
		+ createReceiveConfirmationFunction()
		+ createAbortFunction()

		// End of contract
		+ '}';

	return code;
};