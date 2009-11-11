//ping実行スクリプト

(function(){
	function go_ping(){
		var loops = dom.radioValueChecked('rd');
		var pacsize = dom.valueId('pacsize');
		
		var ping = new CCommandLine("ping");
		
		dom.setValueId('kekka', ping.addArg(form1.ipaddr.value).addOpt("n").addArg(loops).addOpt("l").addArg(pacsize).execute().resultALL());
	};
	function init(){
		//set event handler
		dom.addListener(dom.Id('go_ping'), "click" ,go_ping);
	}
	
	//initialize
	dom.addListener(window, "load", init);
})();
