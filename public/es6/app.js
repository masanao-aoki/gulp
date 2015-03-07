import React from 'react';

console.log(React);

var Hello = React.createClass({
	
  render: function() {
    return (
      <div className="container">Hello {this.props.limit}</div>
    );
  }
})

var app = document.getElementById("app"); 

React.render(
	<Hello limit="3" />,
	app
);

// import { Hello, message } from './Hello';


// class test {

// }