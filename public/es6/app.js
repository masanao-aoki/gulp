import React from 'react';
import Request from 'superagent';

var apiPath = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b4a133a7d75663da4bf49cfeac5db5ad&user_id=126218952%40N06&format=json&nojsoncallback=1&api_sig=0897366603b8111d7fe24e20cffc7396';



var Tag = React.createClass({
    render() {
        return(
            <li onClick={this.props.onClick}>{this.props.name}</li>
        )
    }
 });


var User = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    id:   React.PropTypes.number.isRequired
  },
  render() {
    return (
      <div>{this.props.id}:{this.props.title}</div>
    );
  }
});

var Users = React.createClass({
  getInitialState() {
    return {
    	tag: '花',
      users: []
    }
  },
  componentDidMount() {
  	Request.get(apiPath, (res) => {
      console.log(res.body);
      this.setState({users: res.body.photos.photo});
    });
  },
  onClick() {
      console.log(this.state.tag);
      Request.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=952cf48d6b663842d89f8bbf2b55bf60&user_id=126218952%40N06&tags='+this.state.tag+'&format=json&nojsoncallback=1&api_sig=edda3df328fbcf0028057a89cfb8d034', (res) => {
      	console.log(res.body);
	      this.setState({users: res.body.photos.photo});
      });
  },
  set(test) {
  	console.log(test)
  },
  render() {
    var users = this.state.users.map((user) => {
      return <User id={user.id} title={user.title} key={user.id}/>
    });
    return (
      <div>    
	    	<ul>
		    	<Tag name={this.state.tag} onClick={this.onClick} />
	    	</ul>
  	      <p>ユーザー一覧</p>
    	    {users}
      </div>
    );
  }
});


//表示処理

var app = document.getElementById("app"); 

React.render(
	<Users />,
	app
);