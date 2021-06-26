import React from "react";
import Card from "@material-ui/core/Card";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import FlagIcon from "@material-ui/icons/Flag";
import {
  Avatar,
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { green, grey, red, yellow } from "@material-ui/core/colors";
import { comment } from "../../api";
import VoteButtons from "./VoteButtons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    secondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
    },
    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
    green: {
      backgroundColor: grey[900],
      color: green[500],
    },
    red: {
      backgroundColor: grey[900],
      color: red[500],
    },
    yellow: {
      backgroundColor: grey[900],
      color: yellow[500],
    },
    grey: {
      backgroundColor: grey[900],
      color: grey[100],
    },
  })
);

function ThreadComment(state: { comment: comment }) {
  const classes = useStyles();

  var reg = new RegExp(/(.*)\[img:(.*)\](.*)/g);
  var res: RegExpExecArray | null = reg.exec(state.comment.content);

  return (
    <Card
      style={{
        width: "900px",
        maxWidth: "90%",
        padding: "10px",
        margin: "15px",
      }}
      className={classes.primary}
    >
      <Grid container direction="row">
        <Grid
          item
          xs={2}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Avatar className={classes.secondary}>{state.comment.votes}</Avatar>
        </Grid>
        <Grid
          item
          xs={10}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
            padding: "5px",
            paddingLeft: "10px",
          }}
        >
          {res != null ? (
            <img
              src={res[2]}
              alt="imagePath"
              width="250px"
              height="250px"
            ></img>
          ) : (
            <p></p>
          )}
          <Typography variant="body1" style={{ wordWrap: "break-word" }}>
            {res != null ? res[1] : ""}
            {res != null ? res[3] : state.comment.content}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <VoteButtons comment={state.comment} />
        </Grid>
      </Grid>
    </Card>
  );
}

export default ThreadComment;
