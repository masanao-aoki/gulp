define(["exports", "react"], function (exports, _react) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  console.log(React);

  var Hello = React.createClass({
    displayName: "Hello",

    render: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        "Hello ",
        this.props.limit
      );
    }
  });

  var app = document.getElementById("app");

  React.render(React.createElement(Hello, { limit: "3" }), app);

  // import { Hello, message } from './Hello';

  // class test {

  // }
});