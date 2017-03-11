import React from "react";

import Style from "./styles/App.scss";
import logo from "./assets/react-logo.png";

export default class App extends React.Component {

  render() {
    return (
      <div className={Style.App}>
      	<img src={logo} />
        Welcome to React-on!
      </div>
    )
  }

}