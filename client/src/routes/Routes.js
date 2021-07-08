import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Register } from "../../login/register";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Register} />
        </Switch>
      </Router>
    );
  }
}
