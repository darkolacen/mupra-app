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
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import AboutUsSection from "./Sections/AboutUsSection.jsx";
import ContactSection from "./Sections/ContactSection.jsx";
import MessageSection from "./Sections/MessageSection.jsx";
import QuoteSection from "./Sections/QuoteSection.jsx";
import image from "assets/img/house-concept.jpg";

const dashboardRoutes = [];

class LandingPage extends React.Component {
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
        <Parallax filter image={image}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Mupra d.o.o.</h1>
                <h4>
                Smo tehnološko napredno in perspektivno podjetje, polno novih idej in izzivov. Usklajeno ustvarjamo in razvijamo v skupini, kjer vsak uporabi svoja lastna znanja in prednosti.
                </h4>
                <br />
                
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <AboutUsSection />
            <ContactSection />
            {/* <Divider variant="middle" />
            <QuoteSection />
            <Divider variant="middle" /> */}
            {/* <MessageSection /> */}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
