import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
//Style
import startPageStyle from "assets/jss/material-kit-react/views/adminPage/startPage.jsx";
//components
import AddEditArticlePage from "views/AdminPages/AddEditArticlePage/AddEditArticlePage.jsx";
import ReviewCommentsPage from "views/AdminPages/ReviewCommentsPage/ReviewCommentsPage.jsx";

import image from "assets/img/bg7.jpg";
const dashboardRoutes = [];

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toHome: false,
      value: 0
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token') == null) {
      this.setState({ toHome: true });
    }

  }

  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }

  render() {
    if (this.state.toHome == true) {
      return <Redirect to='/' />
    }
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <div style={{ backgroundColor:"white" }}>
                  <AppBar position="static" color="default">
                    <Tabs value={this.state.value} onChange={this.handleChange.bind(this)}>
                      <Tab label="Review Comments" />
                      <Tab label="Edit Articles" />
                    </Tabs>
                  </AppBar>
                  {this.state.value === 0 && <TabContainer><ReviewCommentsPage /></TabContainer>}
                  {this.state.value === 1 && <TabContainer><AddEditArticlePage /></TabContainer>}
                </div>
                
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}



export default withStyles(startPageStyle)(StartPage);