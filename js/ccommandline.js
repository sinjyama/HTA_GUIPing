//コマンドラインClass
var CCommandLine = function(command){
	if (typeof CCommandLine.oWSS == 'undefined') CCommandLine.oWSS = new ActiveXObject( "WScript.Shell" );
	
	this.Str = command;
	this.Separater = "-";
	
	this.oEXEC = null;
}

CCommandLine.prototype = {
	setSeparater : function(separater){
		this.Separater = separater;
	},
	addArg : function(argument){
		this.Str = this.Str + " " + argument;
		return this;
	},
	addOpt : function(option){
		this.Str = this.Str + " " + this.Separater + option;
		return this;
	},
	addOptWithArg : function(option, argument){
		return this.addOpt(option).addArg(argument);
	},
	execute : function(){
		this.oEXEC = CCommandLine.oWSS.Exec(this.Str);
		return this;
	},
	resultALL : function(){
		return this.oEXEC.StdOut.ReadAll();
	}
};
