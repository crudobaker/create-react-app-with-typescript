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
  onClose: Function;
};

export default function MyDialog(props: MyDialogProps) {
  const handleClose = () => props.onClose();

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>{"Hello!!!!"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Welcome ${props.state.name} to the Team!`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
