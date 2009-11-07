//DOMユーティリティ
var dom = {
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
