import React, { useState } from "react";
import {
  TextField,
  Paper,
  InputBase,
  Divider,
  IconButton,
  FormControl,
  Grid,
} from "@material-ui/core";
import { RateReview as RateReviewIcon } from "@material-ui/icons";

function WriteComment(state: {
  submit: (message: string) => Promise<boolean>;
}) {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    state.submit(msg).then((r) => {
      setMsg("");
      if (!r) {
        setError(true);
      }
    });
  }

  return (
    <React.Fragment>
      <Paper component="form">
        <form onSubmit={submit} style={{ width: "100%" }}>
          <FormControl style={{ width: "100%" }}>
            <Grid container>
              <TextField
                multiline={true}
                style={{ width: "70%" }}
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
                type="submit"
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
