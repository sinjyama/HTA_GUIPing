//ping実行スクリプト

(function(){
	function go_ping(){
		var loops = dom.valueCheckedName('rd');
		var pacsize = dom.valueId('pacsize');
		
		var ping = new CCommandLine("ping");
		ping.addArg(form1.ipaddr.value).addOptWithArg("n", loops).addOptWithArg("l", pacsize);
		
		dom.setValueId('kekka', ping.execute().resultALL());
	};
	function init(){
		//set event handler
		dom.addListener(dom.Id('go_ping'), "click" ,go_ping);
	}
	
	//initialize
	dom.addListener(window, "load", init);
})();
