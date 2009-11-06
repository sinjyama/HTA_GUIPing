//複数のjavascriptファイルを１つのjsで指定する

(function(){
	function require( uri ) {
		var script = document.createElement( 'script' );
		script.type = 'text/javascript';
		script.src = uri;
		var head = document.getElementsByTagName( 'head' )[0];
		head.appendChild( script );
	}
	
	//以下、読み込みファイルの指定
	require( 'ccommandline.js' );
	require( 'gping.js' );
})();
