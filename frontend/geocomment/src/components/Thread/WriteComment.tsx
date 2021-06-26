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
  Person as PersonIcon,
  Block as BlockIcon,
} from "@material-ui/icons";
import { AnyARecord } from "dns";

function WriteComment(state: {
  submit: (
    message: string,
    anonymous: boolean,
    file: object
  ) => Promise<boolean>;
}) {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const [getFile, setFile] = useState<object>({});
  const [getAnonymous, setAnonymous] = useState(true);

  function submit() {
    state.submit(msg, getAnonymous, getFile).then((r) => {
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
              <label
                htmlFor="fileUpload"
                style={{ width: "10%", paddingRight: "5px" }}
              >
                <Button component="span" style={{}}>
                  <AddAPhotoIcon />
                </Button>
              </label>
              <TextField
                multiline={true}
                style={{ width: "60%", padding: "3px" }}
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
                  setAnonymous(!getAnonymous);
                }}
                aria-label="submit"
                style={{
                  maxWidth: "10%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {getAnonymous ? <BlockIcon /> : <PersonIcon />}
              </IconButton>
              <IconButton
                onClick={() => {
                  submit();
                }}
                aria-label="submit"
                style={{
                  maxWidth: "15%",
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
