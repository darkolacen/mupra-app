import { title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";
import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.jsx";
  

const contactStyle = {
  cardTitle:{
    ...cardTitle,
    paddingBottom: "10px"
  },
  

  ...cardLink,
  
  cardSubtitle:{
    ...cardSubtitle,
    paddingBottom: "10px"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  ...imagesStyle,

  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  
  description: {
    color: "#999"
  },
  section:{
    paddingBottom: "70px"
  },
  
  margin5: {
    margin: "5px"
  }
};

export default contactStyle;
