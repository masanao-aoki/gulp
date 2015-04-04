define(["exports", "react", "superagent", "actions", "store"], function (exports, _react, _superagent, _actions, _store) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var Request = _interopRequire(_superagent);

  var Actions = _actions.Actions;
  var PhotosStore = _store.PhotosStore;

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
        photos: []
      };
    },
    componentDidMount: function componentDidMount() {
      PhotosStore.photo_on(this.chahgeState);
      Actions.fetch();
    },
    chahgeState: function chahgeState() {
      this.setState({
        photos: PhotosStore.photos
      });
    },
    set: function set(test) {
      console.log(test);
    },
    render: function render() {
      var photos = this.state.photos.map(function (user) {
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
        photos
      );
    }
  });

  //表示処理

  var app = document.getElementById("app");

  React.render(React.createElement(Users, null), app);
});