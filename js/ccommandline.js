//コマンドラインClass
var CCommandLine = function(command){
	this.Str = command;
	this.Separater = "-";
}

CCommandLine.prototype = {
	setSeparater : function(separater){
		this.Separater = separater;
	},
	appendArgument : function(argument){
		this.Str = this.Str + " " + argument;
	},
	appendOption : function(option){
		this.Str = this.Str + " " + this.Separater + option;
	},
	appendOptWithArg : function(option, argument){
		this.appendOption(option);
		this.appendArgument(argument);
	}
};
