//DOMユーティリティ
var dom = {
	Id : document.getElementById,
	Names : document.getElementsByName,
	Tags : function(){ /* arguments.length > 1 then arg[0] is elm */
		var elm, tag;
		
		switch (arguments.length) {
		case 0:
			return null;
		case 1:
			elm = document;
			tag = arguments[0];
			break;
		default:
			elm = arguments[0];
			tag = arguments[1];
			break;
		}
		return elm.getElementsByTagName(tag);
	},
	//HTML
	radioValueChecked : function(name){
		var list = this.Names(name);
		
		for (var i = 0; i < list.length; i++){
			if (list.item(i).checked) {
				return list.item(i).value;
			}
		}
		return null;
	},
	valueId : function(id){
		return this.Id(id).value;
	},
	setValueId : function(id, value){
		this.Id(id).value = value;
	},
	//DOMイベントモデル
	addListener : function(elm, type, func){
		if (!elm) { return false; }
		if (elm.addEventListener) {
			elm.addEventListener(type, func, false);
		} else if (elm.attachEvent) {
			elm.attachEvent('on'+type, func);
		} else {
			return false;
		}
		return true;
	}
};
