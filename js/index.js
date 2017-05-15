'use strict';

var App = React.createClass({
  displayName: 'App',
  getInitialState: function getInitialState() {
    return {
      person: {
        name: 'Mayank Srivastav',
        bio: 'Software Engineer based in India'
      },
      image: 'http://static1.squarespace.com/static/55acc005e4b098e615cd80e2/t/57b057398419c2c454f09924/1471025851733/',
      quote: {
        content: 'Beautiful things don\'t ask for attention',
        source: 'The Secret Life of Walter Mitty'
      }
    };
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(Image, { src: this.state.image }),
      React.createElement(Profile, { person: this.state.person, quote: this.state.quote })
    );
  }
});

var Image = function Image(props) {
  return React.createElement('div', { className: 'Image', style: { backgroundImage: 'url(' + props.src + ')' } });
};

var Profile = function Profile(props) {
  return React.createElement(
    'div',
    { className: 'Profile' },
    React.createElement(
      'h1',
      { className: 'Name' },
      props.person.name
    ),
    React.createElement(
      'p',
      { className: 'Bio' },
      props.person.bio
    ),
    React.createElement(
      'div',
      { className: 'Quote' },
      React.createElement(
        'blockquote',
        null,
        '“ ',
        props.quote.source,
        ' ” '
      ),
      React.createElement(
        'div',
        { className: 'byline' },
        '— ',
        props.quote.source
      )
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));