require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class LogoComponent extends React.Component {
  render() {
    let image = require('../images/food.jpg');
    return <img src={image} alt="Recipe source" className="index" />;
  }
}

LogoComponent.defaultProps = {
};

export default LogoComponent;
