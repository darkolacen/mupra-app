import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Email from '@material-ui/icons/AlternateEmail';
import LocationCity from '@material-ui/icons/LocationCity';
import Face from "@material-ui/icons/Face";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
//Style
import aboutUsStyle from "assets/jss/material-kit-react/views/landingPageSections/aboutUsStyle.jsx";

const iconStyle = { position: "relative", top: "5px", }


class MainSection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Kontakt in informacije</h2>
        <div>
          <GridContainer>

            <GridItem xs={12} sm={12} md={4} container justify="center">
              <Card style={{ width: "20rem" }}>
                <CardBody>
                  <h3 className={classes.cardTitle}>MUPRA d.o.o.</h3>
                  <h4 className={classes.cardSubtitle}>Lackova cesta 95a</h4>
                  <h4 className={classes.cardSubtitle}>2000 Maribor</h4><br></br>
                  <h4 className={classes.cardSubtitle}><PhoneIphone style={{ position: "relative", top: "5px", }} /> 040 611 810</h4>
                  <h4 className={classes.cardSubtitle}><Email style={{ position: "relative", top: "5px", }} /> melita.lacen@mupra.si</h4>
                  <h4 className={classes.cardSubtitle}><LocationCity style={{ position: "relative", top: "5px", }} /> Lackova cesta 41, Maribor</h4>
                  <br />
                  <h4 className={classes.cardSubtitle}><small>ID za DDV:</small> SI86230905</h4>
                  <h4 className={classes.cardSubtitle}><small>Matična številka:</small> 6412807</h4>
                  <h4 className={classes.cardSubtitle}><small>TRR:</small> SI56 0510 0801 3699 496</h4>
                  <h4 className={classes.cardSubtitle}><small>Odprt pri:</small> ABANKA VIPA d.d.</h4>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={12} md={8} container justify="center">
              <CustomTabs
                headerColor="success"
                tabs={[
                  {
                    tabName: "Jelka Vodnik",
                    tabIcon: Face,
                    tabContent: (
                      <Card>
                        <CardBody>
                          <h3 className={classes.cardTitle}>Vodja Projektov</h3>
                          <h4 className={classes.cardSubtitle}><PhoneIphone style={{ position: "relative", top: "5px", }} /> 040 639 682</h4>
                          <h4 className={classes.cardSubtitle}><Email style={{ position: "relative", top: "5px", }} /> mupra@mupra.si</h4>
                          <h4 className={classes.cardSubtitle}><LocationCity style={{ position: "relative", top: "5px", }} /> Lackova cesta 41, Maribor</h4>
                          
                        </CardBody>
                      </Card>
                    )
                  },
                  {
                    tabName: "Maja Mlakar",
                    tabIcon: Face,
                    tabContent: (
                      <Card>
                        <CardBody>
                          <h3 className={classes.cardTitle}>Pomočnik Vodje Projektov</h3>
                          <h4 className={classes.cardSubtitle}><PhoneIphone style={{ position: "relative", top: "5px", }} /> 040 639 682</h4>
                          <h4 className={classes.cardSubtitle}><Email style={{ position: "relative", top: "5px", }} /> mupra@mupra.si</h4>
                          <h4 className={classes.cardSubtitle}><LocationCity style={{ position: "relative", top: "5px", }} /> Lackova cesta 41, Maribor</h4>
                          
                        </CardBody>
                      </Card>
                    )
                  },
                  {
                    tabName: "Dušan Lačen",
                    tabIcon: Face,
                    tabContent: (
                      <Card>
                        <CardBody>
                          <h3 className={classes.cardTitle}>Računalništvo</h3>
                          <h4 className={classes.cardSubtitle}><PhoneIphone style={{ position: "relative", top: "5px", }} /> 040 876 032</h4>
                          <h4 className={classes.cardSubtitle}><Email style={{ position: "relative", top: "5px", }} /> dusan.lacen@mupra.si</h4>
                          <h4 className={classes.cardSubtitle}><LocationCity style={{ position: "relative", top: "5px", }} /> Lackova cesta 41, Maribor</h4>
                          
                        </CardBody>
                      </Card>
                    )
                  }
                ]}
              />
            </GridItem>

          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(MainSection);
