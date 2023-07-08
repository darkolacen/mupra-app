import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss";

// Pages
import LandingPage from "views/LandingPage/LandingPage.jsx";
import MorePage from "views/MorePage/MorePage.jsx";
import ContactPage from "views/ContactPage/ContactPage.jsx";
import EmploymentPage from "views/EmploymentPage/EmploymentPage";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/employment" component={EmploymentPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/more-page/:page" component={MorePage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
