import EventEmitter from 'components/eventEmitter/EventEmitter';
import {AppDispatcher} from 'dispatcher/AppDispatcher';

class Store extends EventEmitter {
	constructor() {
    super();
    this.photos = [];
  }

  photo_emit() {
    this.emit('fetch');
  }

  photo_on(collback) {
    this.on('fetch', collback);
  }
}

export var PhotosStore = new Store();

var updatePhotos = function(photos) {
	PhotosStore.photos = photos;
}

AppDispatcher.register((action) => {
	if(action.actionType === 'fetch') {
		PhotosStore.photo_emit();
	} else if (action.actionType === 'success') {
		updatePhotos(action.photos);
		PhotosStore.photo_emit();
	}
});