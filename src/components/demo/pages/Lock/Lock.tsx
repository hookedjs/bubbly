import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "~/themes/bubbly/src/components/modules/Buttons/Button";
import CustomInput from "~/themes/bubbly/src/components/modules/CustomInput/CustomInput";
import Card from "~/themes/bubbly/src/components/modules/Card/Card";
import CardBody from "~/themes/bubbly/src/components/modules/Card/CardBody";
import CardAvatar from "~/themes/bubbly/src/components/modules/Card/CardAvatar";
import CardFooter from "~/themes/bubbly/src/components/modules/Card/CardFooter";

import avatar from "~/themes/bubbly/src/components/demo/assets/img/faces/avatar.jpg";

import { LockStyle } from "./LockStyle";

class Lock extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <form>
          <Card
            profile
            className={
              classes.customCardClass + " " + classes[this.state.cardAnimaton]
            }
          >
            <CardAvatar profile className={classes.cardAvatar}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>Tania Andrew</h4>
              <CustomInput
                labelText="Enter Password"
                id="company-disabled"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "password"
                }}
              />
            </CardBody>
            <CardFooter className={classes.justifyContentCenter}>
              <Button color="rose" round>
                Unlock
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    );
  }
}

Lock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(LockStyle)(Lock);