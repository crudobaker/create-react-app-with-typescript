import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { AppContext, type AppContextType } from "./context";

export type MyDialogProps = {
  show: boolean;
  onClose: Function;
};

export default function MyDialog(props: MyDialogProps) {
  const onPressButton = (context: AppContextType) => {
    const { age } = context;
    if (age < 25) context.updateFeature("Young");
    else context.updateFeature("Old");

    props.onClose();
  };

  return (
    <AppContext.Consumer>
      {(context: AppContextType) => (
        <Dialog open={props.show} onClose={() => props.onClose()}>
          <DialogTitle>{"Hello!!!!"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`Welcome ${context.name} to the Team!`}
              <br />
              <Button onClick={() => onPressButton(context)}>
                Pressme to know your Feature
              </Button>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => props.onClose()}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </AppContext.Consumer>
  );
}
