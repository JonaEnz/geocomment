import React, { useState } from "react";
import {
  Avatar,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { comment } from "../../api/models/comment";
import { Service as ServiceApi } from "../../api/services/Service";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import FlagIcon from "@material-ui/icons/Flag";
import AddCommentIcon from "@material-ui/icons/AddComment";
import { green, grey, red, yellow, blue } from "@material-ui/core/colors";

function vote(vote: number, c: comment): Promise<boolean> {
  if (Math.abs(vote) !== 1) {
    return new Promise<boolean>(() => {
      return false;
    });
  }
  return ServiceApi.vote(c.threadId, c.id, vote === 1).then(
    () => {
      return true;
    },
    () => {
      return false;
    }
  );
}

function openReport() {
  //TODO
  console.log("openReport()");
}

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
    lightblue: {
      backgroundColor: grey[900],
      color: blue[400],
    },
    grey: {
      backgroundColor: grey[900],
      color: grey[100],
    },
  })
);

function VoteButtons(state: {
  comment: comment;
  reportCallback: (id: number) => void;
  selectCallback: (id: number) => void;
}) {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <Button
        onClick={() => {
          vote(1, state.comment).then((success) => {
            if (success) {
              setUpvoted(true);
            }
          });
        }}
        disabled={upvoted || downvoted}
      >
        <Avatar className={upvoted ? classes.green : classes.grey}>
          <ThumbUpIcon />
        </Avatar>
      </Button>
      <Button
        onClick={() => {
          vote(-1, state.comment).then((success) => {
            if (success) {
              setDownvoted(true);
            }
          });
        }}
        disabled={upvoted || downvoted}
      >
        <Avatar className={downvoted ? classes.red : classes.grey}>
          <ThumbDownIcon />
        </Avatar>
      </Button>
      <Button
        onClick={() => {
          state.reportCallback(state.comment.id);
        }}
      >
        <Avatar className={classes.yellow}>
          <FlagIcon />
        </Avatar>
      </Button>
      <Button
        onClick={() => {
          state.selectCallback(state.comment.id);
        }}
      >
        <Avatar className={classes.lightblue}>
          <AddCommentIcon />
        </Avatar>
      </Button>
    </div>
  );
}

export default VoteButtons;
