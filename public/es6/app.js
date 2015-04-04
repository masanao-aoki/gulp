import React from 'react';
import Request from 'superagent';
import {Actions} from 'actions';
import {PhotosStore} from 'store';


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
      photos: []
    }
  },
  componentDidMount() {
    PhotosStore.photo_on(this.chahgeState);
    Actions.fetch();
  },
  chahgeState() {
    this.setState({
      photos: PhotosStore.photos
    });
  }, 
  set(test) {
  	console.log(test)
  },
  render() {
    var photos = this.state.photos.map((user) => {
      return <User id={user.id} title={user.title} key={user.id}/>
    });
    return (
      <div>    
	    	<ul>
		    	<Tag name={this.state.tag} onClick={this.onClick} />
	    	</ul>
  	      <p>ユーザー一覧</p>
    	    {photos}
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