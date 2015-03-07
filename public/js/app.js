define(["exports", "react", "superagent"], function (exports, _react, _superagent) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var Request = _interopRequire(_superagent);

  var apiPath = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b4a133a7d75663da4bf49cfeac5db5ad&user_id=126218952%40N06&format=json&nojsoncallback=1&api_sig=0897366603b8111d7fe24e20cffc7396";

  var Tag = React.createClass({
    displayName: "Tag",

    render: function render() {
      return React.createElement(
        "li",
        { onClick: this.props.onClick },
        this.props.name
      );
    }
  });

  var User = React.createClass({
    displayName: "User",

    propTypes: {
      title: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired
    },
    render: function render() {
      return React.createElement(
        "div",
        null,
        this.props.id,
        ":",
        this.props.title
      );
    }
  });

  var Users = React.createClass({
    displayName: "Users",

    getInitialState: function getInitialState() {
      return {
        tag: "花",
        users: []
      };
    },
    componentDidMount: function componentDidMount() {
      var _this = this;

      Request.get(apiPath, function (res) {
        console.log(res.body);
        _this.setState({ users: res.body.photos.photo });
      });
    },
    onClick: function onClick() {
      var _this = this;

      console.log(this.state.tag);
      Request.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=952cf48d6b663842d89f8bbf2b55bf60&user_id=126218952%40N06&tags=" + this.state.tag + "&format=json&nojsoncallback=1&api_sig=edda3df328fbcf0028057a89cfb8d034", function (res) {
        console.log(res.body);
        _this.setState({ users: res.body.photos.photo });
      });
    },
    set: function set(test) {
      console.log(test);
    },
    render: function render() {
      var users = this.state.users.map(function (user) {
        return React.createElement(User, { id: user.id, title: user.title, key: user.id });
      });
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          null,
          React.createElement(Tag, { name: this.state.tag, onClick: this.onClick })
        ),
        React.createElement(
          "p",
          null,
          "ユーザー一覧"
        ),
        users
      );
    }
  });

  //表示処理

  var app = document.getElementById("app");

  React.render(React.createElement(Users, null), app);
});