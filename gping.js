//ping実行スクリプト

window.onload = function() {
	form1.go_ping.onclick = function() {
		for (i = 0; i < form1.rd.length; i++) {
			if (form1.rd(i).checked) {
				loops = i + 1;
			}
		}
		pacsize = form1.pacsize.value;
		
		var exCommand = new CCommandLine( "ping" );
		exCommand.appendArgument( form1.ipaddr.value );
		exCommand.appendOptWithArg( "n", loops );
		exCommand.appendOptWithArg( "l", pacsize );
		
		var WshShell = new ActiveXObject( "WScript.Shell" );
		var oExec = WshShell.Exec( exCommand.Str );
		R = oExec.StdOut.ReadAll();
		form1.kekka.value = R;
	}
}
