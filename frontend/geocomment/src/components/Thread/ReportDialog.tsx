import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";

function ReportDialog(props: {
  open: boolean;
  callback: (reason: string) => void;
}) {
  const [reason, setReason] = React.useState("");
  const handleClickOpen = () => {};

  const handleClose = () => {};

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{ display: "none" }}
      >
        Open form dialog
      </Button>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Report</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide a reason for your report.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            label="Reason"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              props.callback("");
              handleClose();
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              props.callback(reason);
              handleClose();
            }}
            color="primary"
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReportDialog;
