define(["exports", "superagent"], function (exports, _superagent) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Request = _interopRequire(_superagent);

	var GetApi = exports.GetApi = function GetApi(coallback) {
		var apiPath = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b500036e4c01adc54250ecd26f216817&user_id=37978321@N03&format=json&nojsoncallback=1";

		Request.get(apiPath, function (res) {
			coallback(res.body.photos.photo);
		});
	};
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
});