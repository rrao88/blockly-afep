/**
 * @fileoverview Helper functions for generating Solidity for blocks.
 */
'use strict';

goog.provide('Blockly.Solidity.contract');

goog.require('Blockly.Solidity');

Blockly.Solidity['contract_main'] = function (block) {

	var TAB = '\u00a0\u00a0\u00a0\u00a0';

	var contract_name = block.getFieldValue('NAME');
	var statements_seller = Blockly.Solidity.statementToCode(block, 'SELLER');
	var statements_object = Blockly.Solidity.statementToCode(block, 'OBJECT');
	var statements_buyer = Blockly.Solidity.statementToCode(block, 'BUYER');
	var statements_carrier = Blockly.Solidity.statementToCode(block, 'CARRIER');

	function createVariableDeclarations() {
		return TAB + 'address public seller;\n'
			+ TAB + 'address public buyer;\n'
			+ TAB + 'uint public price;\n'
			+ TAB + 'State public state\n\n';
	}

	function createStateEnum() {
		return TAB + 'enum State { Created, Locked, Inactive }\n\n';
	}

	function createConstructor() {
		return TAB + 'function ' + contract_name.replace(/\ /g, "_") + ' payable {\n'
			+ TAB + TAB + 'seller = msg.sender;\n'
			+ TAB + TAB + 'price = msg.value;\n'
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

	function appendGeneratedBlockCode() {
		return statements_seller + '\n\n'
			+ statements_object + '\n\n'
			+ statements_buyer + '\n\n'
			+ statements_carrier + '\n\n';
	}

	var code = 'pragma solidity ^0.4.18;\n\n'

		// Begin of contract
		+ 'contract ' + contract_name + ' {\n\n'

		// State enum definition
		+ createStateEnum()

		// Variable declaration
		+ createVariableDeclarations()

		// Constructor
		+ createConstructor()

		// Modifiers
		+ createModifiers()

		// Generated Sub-Block Code
		+ appendGeneratedBlockCode()

		// End of contract
		+ '}';

	return code;
};