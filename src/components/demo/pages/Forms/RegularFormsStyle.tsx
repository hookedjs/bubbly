// ##############################
// // // RegularForms view styles
// #############################

import {
  cardTitle,
  successColor,
  dangerColor
} from "~/themes/bubbly/src/MainStyles";
import { CustomCheckboxRadioSwitchStyle } from "~/themes/bubbly/src/components/modules/Form/CustomCheckboxRadioSwitchStyle";

export const RegularFormsStyle = {
  ...CustomCheckboxRadioSwitchStyle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  staticFormGroup: {
    marginLeft: "0",
    marginRight: "0",
    paddingBottom: "10px",
    margin: "8px 0 0 0",
    position: "relative",
    "&:before,&:after": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  },
  staticFormControl: {
    marginBottom: "0",
    paddingTop: "8px",
    paddingBottom: "8px",
    minHeight: "34px"
  },
  inputAdornment: {
    marginRight: "8px",
    position: "relative"
  },
  inputAdornmentIconSuccess: {
    color: successColor + "!important"
  },
  inputAdornmentIconError: {
    color: dangerColor + "!important"
  }
};