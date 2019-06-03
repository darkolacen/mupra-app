import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/icons
import PhoneIphone from '@material-ui/icons/PhoneIphone';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import quoteStyle from "assets/jss/material-kit-react/views/landingPageSections/quoteStyle.jsx";




class QuoteSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    componentDidMount() {
        
        fetch('http://api.mupra.si/api/comments')
            .then(response => response.json())
            .then(content => this.setState({ comments: content.data.filter(comment => comment.approved == 1) }));
    }

  render() {
    const { classes } = this.props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
      <div className={classes.section}>
        
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                    <Carousel {...settings}>
                        {this.state.comments.map(comment => 
                            <div>
                                <div style={{background:'white', width:'100%', height:'250px'}}></div>
                                <div className="slick-caption" style={{color:'black'}}>
                                    <h4>
                                        {comment.message}
                                    </h4>
                                    <div style={{float:'right'}}>
                                        <h6>- {comment.name}</h6>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        
                    </Carousel>
            </GridItem>
            
              
          </GridContainer>
      </div>
    );
  }
}

export default withStyles(quoteStyle)(QuoteSection);
