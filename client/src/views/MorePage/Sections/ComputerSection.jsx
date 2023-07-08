import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// @material-ui/icons
import DesktopMac from "@material-ui/icons/DesktopMac";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import aboutUsStyle from "assets/jss/material-kit-react/views/landingPageSections/aboutUsStyle.jsx";
import data from "assets/data";

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

class ComputerSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
        };
    }

    componentDidMount() {

        this.setState({ articles: data.data.filter(el => el.category.includes('racunalnistvo')) })
    }
    render() {
        const { classes } = this.props;
        const { articles } = this.state;

        return (
            <div className={classes.section}>

                <div>
                    <GridContainer >
                        <GridItem xs={12} sm={12} md={4} >
                            <InfoArea
                                title="Računalništvo"
                                description="MUPRA d.o.o. je specializirano podjetje za celovito informacijsko podporo za mala in srednja podjetja. Iz leta v leto se konstantno razvijamo in sledimo konkurenčnim razmeram na trgu. Tako lahko našim naročnikom ponudimo načrtovanje, izvedbo, namestitev in vzdrževanje celotnih informacijskih sistemov, ki njihova podjetja ohranjajo konkurenčna."
                                icon={DesktopMac}
                                iconColor="primary"

                            />

                        </GridItem>
                        <GridItem xs={12} sm={12} md={8} >
                            {articles.map(article =>
                                <ExpansionPanel key={article.id}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>{article.title}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography dangerouslySetInnerHTML={{ __html: article.content }}>

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )}



                        </GridItem>

                    </GridContainer>
                </div>
            </div>
        );
    }

}

export default withStyles(aboutUsStyle)(ComputerSection);
