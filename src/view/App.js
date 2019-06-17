import React from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "../view/pages/HomePage"
import { AboutPage } from "../view/pages/AboutPage"

import "../App.css";


class App extends React.Component {


  render() {
    return (
      <>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default App;
