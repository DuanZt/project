import $ from "jquery";

export default function(_D){
	var _ = _D.utils;
	var _CORE = _D.core;
	var utils = {
    
		getH1Text: function(){
			let txt = $('h1').text() || '0';
			return txt;
		},
    
	};
	_.extObj(_, utils);
};