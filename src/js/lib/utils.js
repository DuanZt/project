import $ from "jquery";

export function getSearchQuery(url) {
	var search = url ? getSearchQueryFromUrl(url) : location.search;
	var obj = queryStrToObject(search);
	for (var key in obj) {
		var item = obj[key];
		if (item instanceof Array) {
			for (var i = 0; i < item.length; i++) {
				item[i] = decodeURI(item[i]);
			}
		}
		else {
			obj[key] = decodeURI(item);
		}
	}
	return obj;
}

export function getSearchQueryFromUrl(url) {
	if (/^.+\?.*$/.test(url)) {
		var query = "";
		query = url.replace(/^.+[?\$]/, "");
		return "?" + query;
	}
	else {
		return "";
	}
}

export function queryStrToObject(queryStr) {
	queryStr = queryStr.replace(/\?/, "");
	if (queryStr == "" || queryStr == "?") {
		return {};
	}
	var queryArr = queryStr.split("&");
	var queryObj = {};
	for (var i = 0; i < queryArr.length; i++) {
		var pair = queryArr[i].split("=");
		var key = pair[0];
		var value = pair[1];
		if (queryObj[key]) {
			if (queryObj[key] instanceof Array) {
				queryObj[key].push(value);
			}
			else {
				queryObj[key] = [queryObj[key], value];
			}
		}
		else {
			queryObj[key] = value;
		}
	}

	return queryObj;
}

export function getUrlWithoutQuery(url) {
	url = url.replace(/\?.*$/, "");
	return url;
}

export function getNewUrlWithNewQuery(url, newQuery, removeKeys) {
	var baseUrl = getUrlWithoutQuery(url);
	var query = queryStrToObject(getSearchQueryFromUrl(url));
	console.log(query);
	for (var i = 0; (removeKeys && (i < removeKeys.length)); i++) {
		delete query[removeKeys[i]];
	}
	for (var key in newQuery) {
		query[key] = newQuery[key];
	}
	var queryStr = formatToQueryStr(query);
	var newUrl = baseUrl + queryStr;
	return newUrl;
}

export function getUrlWithNewQuery(newQuery, removeKeys) {
	var baseUrl = getCurrentUrlWithoutQuery();
	var query = queryStrToObject(location.search);
	for (var i = 0; (removeKeys && (i < removeKeys.length)); i++) {
		delete query[removeKeys[i]];
	}
	for (var key in newQuery) {
		query[key] = newQuery[key];
	}
	var queryStr = formatToQueryStr(query);
	var newUrl = baseUrl + queryStr;
	return newUrl;
}

export function getCurrentUrlWithoutQuery() {
	var href = location;
	var url = href.origin + href.pathname;
	return url;
}

export function getDaseUrlWithLang() {
	var base = urlDirectAcessDaseUrl();
	if (!base) {
		base = getDaseUrl();
	}
	var url = base + getLang() + "/";
	return url;
}

export function redirectWithNewQuery(page, newQuery, removeKeys, multiQuery) {
	var queryStr = "";
	var newPage = "";
	if (page == "/") {
		newPage = getDaseUrlWithLang();
	}
	else if (page == "") {
		newPage = getCurrentUrlWithoutQuery();
	}
	else {
		newPage = getDaseUrlWithLang() + page;
	}


	// var query = queryStrToObject(location.search);
	var query = getSearchQuery();
	for (var i = 0; (removeKeys && (i < removeKeys.length)); i++) {
		var oldQueryKey = removeKeys[i];
		if (oldQueryKey instanceof Object) {
			var oldQueryItem = oldQueryKey;
			var oldQueryItemKey = getObjKeys(oldQueryItem)[0];
			var oldQueryItemVal = oldQueryItem[oldQueryItemKey];

			var curQuerys = query[oldQueryItemKey];
			if (curQuerys instanceof Array) {
				for (var j = 0; j < curQuerys.length; j++) {
					var curQuery = curQuerys[j];
					if (curQuery == oldQueryItemVal) {
						curQuerys.splice(j, 1);
					}
				}
			}
			else {
				delete query[oldQueryItemKey]
			}
		}
		else {
			delete query[oldQueryKey];
		}
	}
	for (var key in newQuery) {
		if (multiQuery && query[key]) {
			if (query[key] instanceof Array) {
				query[key].push(newQuery[key]);
			}
			else {
				query[key] = [query[key], newQuery[key]];
			}
		}
		else {
			query[key] = newQuery[key];
		}
	}
	queryStr = formatToQueryStr(query);

	var newUrl = newPage + queryStr;
	location.href = newUrl;
}


export function redirect(page, query, silence) {
	silence = typeof silence === typeof void (0) ? false : true;
	var queryStr = formatToQueryStr(query);
	var url = getDaseUrlWithLang() + page + queryStr;
	if (!silence) {
		location.href = url;
	}
	return url;
}

export function getOrigin() {
	var origin = "";
	var loc = location;
	origin = loc.protocol + "//" + loc.host;
	return origin;
}

export function urlDirectAcessDaseUrl(path) {
	var fullUrl = location.href;
	var base = $("#base_url").val();
	base = base.replace(/https?:\/\/.+?\//, "/");
	var reg = new RegExp(".+" + base + "catalog\\/([^\\/]+)\\/(:?(\\w\\w))");
	var match = reg.exec(fullUrl);
	if (match) {
		var DASE_URL = getOrigin() + base + "catalog/" + match[1] + (path || "") + "/";
		return DASE_URL;
	}
	return null;
}

function isAWS() {
	if ($("#s3_base_url").val()) {
		return true;
	}
	return false;
}

export function getDaseUrl(path, from_s3) {
	if (isAWS()) {
		from_s3 = from_s3 ? true : false;
		if (from_s3) {
			var base = $("#s3_base_url").val();
			return base + "/" + path;
		}
		else {
			var base = $("#base_url").val();
			base = base.replace(/https?:\/\/.+?\//, "/");
			var DASE_URL = getOrigin() + base + (path || "");
			return DASE_URL;
		}
	}
	else {
		var base = $("#base_url").val();
		base = base.replace(/https?:\/\/.+?\//, "/");
		var DASE_URL = getOrigin() + base + (path || "");
		return DASE_URL;
	}
}

export function getLang() {
	var baseUrl = getDaseUrl();
	var url = location.href;
	var segs = location.href.split(baseUrl).join("").split("/");
	var lang = segs[0];
	if (lang.length !== 2 && lang === "catalog") {
		lang = segs[2];
	}
	return lang;
}

export function getObjKeys(obj) {
	var keys = [];
	for (var key in obj) {
		keys.push(key);
	}
	return keys;
}

export function toggleClass($el, selector) {
	var flag = $el.hasClass(selector);
	if (!flag) {
		$el.addClass(selector);
	}
	else {
		$el.removeClass(selector);
	}
}

export function formatToQueryStr(query) {
	var queryStr = "";
	if (query) {
		var queryArr = [];
		for (var key in query) {
			if (query[key] instanceof Array) {
				var c_query = query[key];
				for (var i = 0; i < c_query.length; i++) {
					queryArr.push(key + "=" + c_query[i]);
				}
			}
			else {
				queryArr.push(key + "=" + query[key]);
			}
		}
		queryStr = "?" + queryArr.join("&");
	}
	return queryStr;
}

export function obj2Array(obj, preserveKey, preserveValue) {
	var arr = [];
	for (var key in obj) {
		if (preserveKey && !preserveValue) {
			arr.push(key);
		}
		else if (preserveValue && !preserveKey) {
			arr.push(value);
		}
		else {
			arr.push({
				key: key,
				value: obj[key]
			});
		}
	}
	return arr;
};

export function getFunctionName(fn) {
	if (fn.name) {
		return fn.name;
	}
	else {
		var str = fn.toString();
		var fnName = str.match(/^function\s*([^\s(]+)/);
		return (fnName && fnName[1]) || "";
	}
};

export function isEmptyObj(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

export function uploadFilePickerFile(url, file, extData, callback) {
	var formData = new moxie.xhr.FormData();
	formData.append('userfile', file);
	// formData.append('mode', mode);
	if (extData && extData instanceof Object) {
		for (var key in extData) {
			formData.append(key, extData[key]);
		}
	}
	// url = getDaseUrl() + url;
	var xhr = new moxie.xhr.XMLHttpRequest();
	xhr.open("POST", url);

	xhr.onreadystatechange = function () {
		if (xhr.status === 200 && xhr.readyState === 4) {
			var res = "";
			try {
				res = JSON.parse(xhr.response);
			}
			catch (err) {
				res = xhr.response;
			}
			callback(null, res);
		}
		// console.log(xhr);
	}
	xhr.onerror = function (err) {
		callback(err);
	}
	xhr.send(formData);
}

export function request(method, url, query, data, callback, errCallback, fileFlag) {
	if (query) {
		var queryStr = "";
		var queryArr = [];
		for (var key in query) {
			queryArr.push(key + "=" + query[key]);
		}
		queryStr = "?" + queryArr.join("&");
		url += queryStr;
	}
	if (fileFlag) {
		var file = data;
		if (window["File"]) {
			var formData = new FormData();
			formData.append('userfile', file);
			$.ajax({
				url: url,
				method: method,
				cache: false,
				data: formData,
				processData: false,
				contentType: false
			}).done(function (msg) {
				callback(msg);
			}).fail(function (jqXHR, textStatus) {
				errCallback({ jqXHR: jqXHR, textStatus: textStatus });
			});
		}
		else {
			uploadFilePickerFile(url, file, null, function (err, result) {
				if (!err) {
					callback(result);
				}
				else {
					errCallback(err);
				}
			});
		}
	}
	else {
		$.ajax({
			url: url,
			method: method,
			data: data,
			dataType: "json"
		}).done(function (msg) {
			callback(msg);
		}).fail(function (jqXHR, textStatus) {
			errCallback({ jqXHR: jqXHR, textStatus: textStatus });
		});
	}
}

export function extObj(origin, ext) {
	for (let key in ext) {
		origin[key] = ext[key];
	}
	return origin;
};

export function text(key) {
	let _D = window["_DUAN"];
	return _D._textMap && _D._textMap[key];
}


export function IEClass() {
	var ms_ie = false;
	var ua = window.navigator.userAgent;
	var old_ie = ua.indexOf('MSIE ');
	var new_ie = ua.indexOf('Trident/');
	var _ms_edge = ua.indexOf('Edge/');

	if ((old_ie > -1) || (new_ie > -1) || (_ms_edge > -1)) {
		ms_ie = true;
	}

	if (ms_ie) {
		document.documentElement.className += " ie";
	}
	window["_ms_ie"] = ms_ie;
}

export function replaceEl($el, html) {
	var $newEl = $(html);
	$el.replaceWith($newEl);
	return $newEl;
}

export function sliceArray(arr, len) {
	var res = [];
	var count = 0;
	var temp = [];
	for (var i = 0; i < arr.length; i++) {
		count++;
		temp.push(arr[i]);
		if (count === len || i === arr.length - 1) {
			res.push(temp);
			temp = [];
			count = 0;
		}

	}
	return res;
}