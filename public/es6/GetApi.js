import Request from 'superagent';

export var GetApi = function(coallback) {
var apiPath = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b500036e4c01adc54250ecd26f216817&user_id=126218952@N06&format=json&nojsoncallback=1';

	Request.get(apiPath, (res) => {
		coallback(res.body.photos.photo);
   });
}