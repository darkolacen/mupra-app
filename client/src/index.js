import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// Pages
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import MorePage from "views/MorePage/MorePage.jsx";
import StartPage from "views/AdminPages/StartPage/StartPage.jsx";
import AddEditArticlePage from "views/AdminPages/AddEditArticlePage/AddEditArticlePage.jsx";
import ReviewCommentsPage from "views/AdminPages/ReviewCommentsPage/ReviewCommentsPage.jsx";
import ContactPage from "views/ContactPage/ContactPage.jsx";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/review-comments" component={ReviewCommentsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/article-page" component={AddEditArticlePage} />
      <Route path="/admin" component={StartPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/more-page/:page" component={MorePage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
