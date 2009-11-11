//Class コマンドライン

//constructor
var CCommandLine = function(command){
	//instance variables
	this.Str = command;
	this.Separater = "-";
	
	this.oEXEC = null;
};

//class variables
CCommandLine.oWSS = new ActiveXObject("WScript.Shell");

//instance methods
CCommandLine.prototype = {
	setSeparater : function(separater){
		this.Separater = separater;
	},
	addArg : function(argument){
		this.Str = this.Str + " " + argument;
		return this;
	},
	addOpt : function(option){
		this.addArg(this.Separater + option);
		return this;
	},
	execute : function(){
		this.oEXEC = CCommandLine.oWSS.Exec(this.Str);
		return this;
	},
	resultALL : function(){
		return this.oEXEC.StdOut.ReadAll();
	}
};
