import {AppDispatcher} from 'dispatcher/AppDispatcher';
import {GetApi} from 'GetApi';

export var Actions = {
	fetch() {
		AppDispatcher.dispatch({
			actionType: 'fetch'
		});
		GetApi(this.fetchSuccess);
	},
	fetchSuccess(result) {
		AppDispatcher.dispatch({
			actionType: 'success',
			photos: result
		});
	}
}