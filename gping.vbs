'ping実行スクリプト

Dim WshShell, oExec
Set WshShell = CreateObject("WScript.Shell")

Sub go_ping()
	For i = 0 To form1.rd.length - 1
		if form1.rd(i).checked then
			loops = i + 1
		end if
	Next
	pacsize = form1.pacsize.value
	exCommand = "ping" & " " & form1.ipaddr.value
	exCommand = exCommand & " " & "-n" & " " & loops
	exCommand = exCommand & " " & "-l" & " " & pacsize
	Set oExec = WshShell.Exec(exCommand)
	R = oExec.Stdout.ReadAll
	form1.kekka.value = R
End Sub
