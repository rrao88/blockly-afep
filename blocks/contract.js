Blockly.Blocks['contract_main'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("KAUFVERTRAG")
			.appendField(new Blockly.FieldTextInput("Name des Kaufvertrages"), "NAME");
		this.appendDummyInput();
		this.appendStatementInput("VERKAEUFER")
			.setCheck("contract_verkaeufer")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Verkäufer");
		this.appendStatementInput("KAUFGEGENSTAND")
			.setCheck("contract_gegenstand")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Kaufgegenstand");
		this.appendStatementInput("KAEUFER")
			.setCheck("contract_kaeufer")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Käufer");
		this.appendStatementInput("LIEFERANT")
			.setCheck("contract_lieferant")
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Lieferant");
		this.setColour(159);
		this.setTooltip("Dieses Objekt bildet die Hülle um den Kaufvertrag ab.");
		this.setHelpUrl("");
	}
};