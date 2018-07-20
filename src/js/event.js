import $ from "jquery";

export default function(_D){
	var _ = _D.utils;
	var _API = _D.apiHub;
	var _R = _D.resource;
	var _CORE = _D.core;

  _D.registerEvent("h1test", function (val){

		_API.getTest(val, function(res){
      console.log(res);
    });

  });
  

};