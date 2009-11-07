//ping実行スクリプト

(function(){
	function go_ping(){
		for (i = 0; i < form1.rd.length; i++) {
			if (form1.rd(i).checked) {
				loops = form1.rd(i).value;
			}
		}
		pacsize = form1.pacsize.value;
		
		ping = new CCommandLine("ping");
		ping.addArg(form1.ipaddr.value).addOptWithArg("n", loops).addOptWithArg("l", pacsize);
		
		form1.kekka.value = ping.execute().resultALL();
	};
	function init(){
		//set event handler
		dom.addListener(document.getElementById('go_ping'), "click" ,go_ping);
	}
	
	//initialize
	dom.addListener(window, "load", init);
})();
