import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
//Style
import morePageStyle from "assets/jss/material-kit-react/views/morePage.jsx";
//Sections
import EngineeringSection from "./Sections/EngineeringSection.jsx";
import ComputerSection from "./Sections/ComputerSection.jsx";
import image from "assets/img/house-concept.jpg"

const dashboardRoutes = [];

class morePage extends React.Component {
  // componentDidMount () {
    
  //   console.log(page)
  // }
  
  render() {
    const { classes, ...rest } = this.props;
    const { page } = this.props.match.params
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
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {page.includes('inziniring') && <EngineeringSection></EngineeringSection>}
            {page.includes('racunalnistvo') && <ComputerSection></ComputerSection>}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}


  
  export default withStyles(morePageStyle)(morePage);