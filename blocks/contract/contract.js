Blockly.Blocks['contract_main'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("KAUFVERTRAG")
			.appendField(new Blockly.FieldTextInput("Name des Kaufvertrages"), "NAME");
		this.appendDummyInput();
		this.appendStatementInput("VERKAEUFER")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Verkäufer");
		this.appendStatementInput("KAUFGEGENSTAND")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Kaufgegenstand");
		this.appendStatementInput("KAEUFER")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Käufer");
		this.appendStatementInput("LIEFERANT")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Lieferant");
		this.setColour(159);
		this.setTooltip("Dieses Objekt bildet die Hülle um den Kaufvertrag ab.");
		this.setHelpUrl("");
	}
};