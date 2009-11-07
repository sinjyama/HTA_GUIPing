//ping実行スクリプト

(function(){
	function go_ping(){
		for (i = 0; i < form1.rd.length; i++) {
			if (form1.rd(i).checked) {
				loops = i + 1;
			}
		}
		pacsize = form1.pacsize.value;
		
		ping = new CCommandLine("ping");
		ping.addArg(form1.ipaddr.value).addOptWithArg("n", loops).addOptWithArg("l", pacsize);
		
		form1.kekka.value = ping.execute().resultALL();
	};
	
	//set event handler
	window.onload = function() {
		form1.go_ping.onclick = go_ping;
	};
})();
