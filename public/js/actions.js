define(["exports", "dispatcher/AppDispatcher", "GetApi"], function (exports, _dispatcherAppDispatcher, _GetApi) {
	"use strict";

	var AppDispatcher = _dispatcherAppDispatcher.AppDispatcher;
	var GetApi = _GetApi.GetApi;
	var Actions = exports.Actions = {
		fetch: function fetch() {
			AppDispatcher.dispatch({
				actionType: "fetch"
			});
			GetApi(this.fetchSuccess);
		},
		fetchSuccess: function fetchSuccess(result) {
			AppDispatcher.dispatch({
				actionType: "success",
				photos: result
			});
		}
	};
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
});