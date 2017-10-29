Blockly.Solidity['contract_main'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_verkaeufer = Blockly.Solidity.statementToCode(block, 'VERKAEUFER');
  var statements_kaufgegenstand = Blockly.Solidity.statementToCode(block, 'KAUFGEGENSTAND');
  var statements_kaeufer = Blockly.Solidity.statementToCode(block, 'KAEUFER');
  var statements_lieferant = Blockly.Solidity.statementToCode(block, 'LIEFERANT');
  // TODO: Assemble Solidity into code variable.
	var code = 'pragma solidity ^0.4.18;\n\n'
		+ 'contract ' + block.getFieldValue('NAME') + ' {\n'



		+ '}\n';
  return code;
};