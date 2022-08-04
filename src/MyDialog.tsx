import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { State } from "./state";

export type MyDialogProps = {
  state: State;
  show: boolean;
  onClose: Function;
};

export default function MyDialog(props: MyDialogProps) {
  const ageType = () => {
    const { age } = props.state;
    if (age < 25) return "Young";
    else return "Old";
  };

  return (
    <Dialog open={props.show} onClose={() => props.onClose()}>
      <DialogTitle>{"Hello!!!!"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Welcome ${props.state.name} to the Team!`}
          <br />
          {`Your are too ${ageType()}!`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose()}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
