import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from '@material-ui/core/Divider';

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

//Style
import employmentPageStyle from "assets/jss/material-kit-react/views/contactPage.jsx";
import image from "assets/img/house-concept.jpg"

// Sections for this page
import MainSection from "./Sections/MainSection.jsx";

const dashboardRoutes = [];

class EmploymentPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Mupra"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax style={{height:"20vh"}} filter image={image}>
          {/* <div className={classes.container}>
          </div> */}
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <MainSection></MainSection>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(employmentPageStyle)(EmploymentPage);
