import 'normalize.css/normalize.css';
import 'styles/App.css';
import image from  '../images/food.jpg';

import React from 'react';

class LogoComponent extends React.Component {
  render() {
    return <img src={image} alt="Recipe source" className="index" />;
  }
}

LogoComponent.defaultProps = {
};

export default LogoComponent;
