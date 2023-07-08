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
        <h2 className={classes.title}>Zaposlitev in kariera</h2>
        <div className={classes.description}>
          <h3> Pogoji zaposlitve:</h3>
          <ul>
            <li>Vsaj V/VI stopnja izobrazbe ekonomske ali tehnične smeri</li>
            <li>Vozniški izpit »B« kategorije in lasten prevoz</li>
          </ul>
          <h4>Opis delovnih nalog:</h4>
          <ul>
            <li>
            urejanje pisarniške dokumentarnega gradiva, korespondenca ni sodelovanje s pristojnimi institucijami, opravljanje tajniških in drugih administrativno tehničnih del, telefonska komunikacija, vodenje evidenc ter opravljanje drugih nalog po nalogu nadrejenega glede na potrebo delodajalca
            </li>
          </ul>
          <h4>Od kandidatov pričakujemo:</h4>
          <ul>
            <li>
            poznavanje informacijskih orodij MS Office, MS Word in MS Excel,
            </li>
            <li>
            delovne izkušnje na primerljivem delovnem mestu,
            </li>
            <li>
            izkušnje na področju opravljanja administrativnih nalog in upravljanja z dokumentarnim gradivom,
            </li>
            <li>
            obvladovanje poslovne komunikacije in poslovni bonton,
            </li>
            <li>
            samoorganiziranost, samoiniciativnost, timsko delo, strokovnost in funkcionalna usposobljenost, 
            </li>
            <li>
            zavzemanje za kakovost, pripadnost in etičnost, komuniciranje (pričakujemo učinkovito pisno in ustno komuniciranje, razumljivo izražanje predlogov in mnenj, oblikovanje jasnih, jedrnatih in jezikovno pravilnih sporočil ter raba ustreznih komunikacijskih poti), natančnost, profesionalnost in veselje do dela z ljudmi
            </li>
            <li>
            Nudimo vam timsko delo v tehnološko razvitem in dinamičnem delovnem okolju
            </li>
          </ul>
          <h4>Prednost imajo kandidati:</h4>
          <ul>
            <li>
            Z delovnimi izkušnjami na podobnem delovnem mestu
            </li>
            <li>
            S formalno izobrazbo
            </li>
          </ul>

          <h4>Doba zaposlitve: nedoločen čas, polni delovni čas</h4>
          <h4>Poskusna delo: 6 mesecev</h4>
       
          <div style={{color:"black"}}>
            <h4>Vašo ponudbo z dokazili in opisom dosedanjega dela pričakujemo v 15 dneh po objavi na naslov:
 <br />
 melita.lacen@mupra.si
 </h4>
          </div>
 

 

        </div>
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(MainSection);
