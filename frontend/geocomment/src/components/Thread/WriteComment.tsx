import React, { useState } from "react";
import {
  TextField,
  Paper,
  InputBase,
  Divider,
  IconButton,
  Button,
  FormControl,
  Grid,
} from "@material-ui/core";
import {
  RateReview as RateReviewIcon,
  AddAPhoto as AddAPhotoIcon,
} from "@material-ui/icons";
import { AnyARecord } from "dns";

function WriteComment(state: {
  submit: (message: string, file: object) => Promise<boolean>;
}) {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const [getFile, setFile] = useState<object>({});

  function submit() {
    state.submit(msg, getFile).then((r) => {
      setMsg("");
      if (!r) {
        setError(true);
      }
    });
    setFile({});
  }

  function onFileChange(event: any) {
    setFile(event.target.files[0]);
    console.log(typeof event.target.files[0]);
  }

  return (
    <React.Fragment>
      <Paper component="form">
        <form onSubmit={submit} style={{ width: "100%" }}>
          <FormControl style={{ width: "100%" }}>
            <Grid container>
              <input
                onChange={onFileChange}
                style={{ display: "none" }}
                id="fileUpload"
                type="file"
              />
              <label htmlFor="fileUpload">
                <Button component="span" style={{}}>
                  <AddAPhotoIcon />
                </Button>
              </label>
              <TextField
                multiline={true}
                style={{ width: "70%", padding: "3px", paddingLeft: "7px" }}
                placeholder="Input Comment"
                value={msg}
                onChange={(s) => {
                  setMsg(s.target.value);
                  setError(false);
                }}
                error={error}
                inputProps={{ "aria-label": "input comment" }}
              />
              {/* <Divider orientation="vertical" /> */}
              <IconButton
                onClick={() => {
                  submit();
                }}
                aria-label="submit"
                style={{
                  maxWidth: "20%",
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingLeft: "5%",
                }}
              >
                <RateReviewIcon />
              </IconButton>
            </Grid>
          </FormControl>
        </form>
      </Paper>
    </React.Fragment>
  );
}

export default WriteComment;
