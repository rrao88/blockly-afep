function getDeliveryContractCode(price, isAbortable){

	var code = "contract DeliverContract is BaseContract {\n" +
		"\n" +
		
		// Enum State und Variable state definieren
		"\tenum State { Created, Locked, InDelivery, Inactive }\n" +
		"\tState public state;\n" +
		"\n" +
		
		// Modifier zum prüfen in Welchem State sich der Vertrag befindet
		"\tmodifier inState(State _state) {\n" +
		"\t\trequire(state == _state);\n" +
		"\t\t_;\n" +
		"\t}\n" +
		"\n" +
		
		//Konstruktor für den DeliverContract
		"\tfunction DeliverContract() payable public {\n" +
		"\t\tseller = msg.sender;\n" +
		"\t\tvalue = " + price + ";\n" +
		"\t\tstate = State.Created;\n" +
		"\t\trequire((2 * value) == msg.value);\n" +
		"\t}\n" +
		"\n" +
		
		//Modifier zum prüfen ob der Sender der Transakton der Käufer ist
		"\tmodifier onlyCarrier() {\n" +
		"\t\trequire(msg.sender == buyer);\n" +
		"\t\t_;\n" +
		"\t}\n" +
		"\n" +
		
		//Funktion zum kaufen
		"\tfunction confirmPurchase() inState(State.Created) payable public {\n" +
		"\t\tsuper.purchaseOrderReceived();\n" +
		"\t\tstate = State.Locked;\n" +
		"\t}\n" +
		"\n" +
		
		//Funktion um den Erhalt der Ware zu bestätigen
		"\tfunction confirmReceived() inState(State.InDelivery) public {\n" +
		"\t\tstate = State.Inactive;\n" +
		"\t\tsuper.orderReceivedConfirmed();\n" +
		"\t}\n" +
		"\n" +
		
		//Funktion um die Paketaufgabe zu bestätigen
		"\tfunction confirmInTransit() onlyBuyer inState(State.Locked) public {\n" +
		"\t\tstate = State.InDelivery;\n" +
		"\t}\n" +
		"\n" +
		"}";

}