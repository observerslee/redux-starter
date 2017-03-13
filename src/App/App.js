import React from "react";

import CSSModules from 'react-css-modules';

import styles from "./styles/App.scss";
import logo from "./assets/react-logo.png";

class App extends React.Component {

  render() {
    return (
      <div styleName='App' className='global-style'>
      	<img src={logo} />
        Welcome to React-on!
      </div>
    )
  }

}

export default CSSModules(App, styles);