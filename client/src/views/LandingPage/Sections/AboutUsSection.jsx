import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/icons
import AccountBalance from "@material-ui/icons/AccountBalance";
import DesktopMac from "@material-ui/icons/DesktopMac";
import ExpandMore from '@material-ui/icons/ExpandMore';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from 'components/CustomButtons/Button.jsx';

import aboutUsStyle from "assets/jss/material-kit-react/views/landingPageSections/aboutUsStyle.jsx";


class AboutUsSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>O nas - vizija podjetja</h2>
            <h5 className={classes.description}>
            Podjetje MUPRA je bilo ustanovljeno aprila 2008. Naša vizija je nuditi strankam celostno storitev. Delujemo kot svetovalno in projektantsko podjetje. Pomagamo vam izbrati ustrezno nepremičnino za katero vam pred nakupom preverimo zemljiško knjižno stanje, možnost gradnje … Prizadevamo si za višjo kakovost življenja naših strank in za partnerski odnos z njimi.            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} 
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <InfoArea
                title="Gradbeni Inžiniring"
                description="Glavna dejavnost podjetja je tehnično projektiranje in svetovanje. Specializirani smo za izdelavo urbanističnega dela projekta."
                icon={AccountBalance}
                iconColor="info"
                
              />
              <Link to="/more-page/inziniring">
                <Button size="sm" color="primary" ><ExpandMore style={{color: "#FFFFFF"}}/> Več</Button>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <InfoArea
                title="Računalništvo"
                description="MUPRA d.o.o. je specializirano podjetje za celovito informacijsko podporo za mala in srednja podjetja. Iz leta v leto se konstantno razvijamo in sledimo konkurenčnim razmeram na trgu."
                icon={DesktopMac}
                iconColor="primary"
                
              />
              <Link to="/more-page/racunalnistvo">
                <Button size="sm" color="primary" ><ExpandMore style={{color: "#FFFFFF"}}/> Več</Button>
              </Link>
            </GridItem>

          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsSection);
