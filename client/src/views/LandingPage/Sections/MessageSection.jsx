import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";

import messageStyle from "assets/jss/material-kit-react/views/landingPageSections/messageStyle.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class MessageSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      message: '',
      name: '',
      email: '',
      approved: false,
      sendSuccess: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleOnChange(evt) {
    this.setState({[evt.target.id]: evt.target.value});
  };
  handleSubmit() {
    this.handleClose('modal');
    let comment = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      approved : this.state.approved
    };
    console.log(comment)
    fetch('http://api.mupra.si/api/comments', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

    this.setState({message: '', name: '', email: '', sendSuccess: true})
  }

  

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        {this.state.sendSuccess && <SnackbarContent
          message={
            <span>
              <b>Uspešno:</b> Sporočilo poslano
            </span>
          }
          close
          color="success"
          icon={Check}
        />}
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Vprašanja in Mnenja</h2>
            <h4 className={classes.description}>
            Če imate kakšno vprašanje glede naših storitev vam bomo z veseljem pomagali, vprašanje vpišite v spodnji obrazec. 
Če bi kot naša stranka želeli podati svoje mnenje ali kakšen komentar ga lahko vpišete v spodnji obrazec.
            </h4>
            <form>  
              <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Ime"
                      id="name"
                      inputProps={{
                        value: this.state.name,
                        onChange: this.handleOnChange.bind(this)
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      inputProps={{
                        value: this.state.email,
                        onChange: this.handleOnChange.bind(this)
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <CustomInput
                    labelText="Sporočilo"
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.textArea
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      value: this.state.message,
                      onChange: this.handleOnChange.bind(this)
                    }}
                  />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary" onClick={() => this.handleClickOpen("modal")}>Send Message</Button>
                    <Dialog
                      classes={{
                        root: classes.center,
                        paper: classes.modal
                      }}
                      open={this.state.modal}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={() => this.handleClose("modal")}
                      aria-labelledby="modal-slide-title"
                      aria-describedby="modal-slide-description">
                      <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}>
                        <IconButton
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => this.handleClose("modal")}>
                          <Close className={classes.modalClose} />
                        </IconButton>
                        <h4 className={classes.modalTitle}>Potrditev</h4>
                      </DialogTitle>
                      <DialogContent
                        id="modal-slide-description"
                        className={classes.modalBody}>
                        <h5>Želite poslati komentar?</h5>
                      </DialogContent>
                      <DialogActions
                        className={classes.modalFooter + " " + classes.modalFooterCenter}>
                        <Button
                          onClick={() => this.handleClose("modal")}
                        >
                          NE
                        </Button>
                        <Button
                          onClick={() => this.handleSubmit()}
                          color="primary">
                          DA
                      </Button>
                      </DialogActions>
                    </Dialog>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(messageStyle)(MessageSection);
