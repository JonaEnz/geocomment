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
  })
);

function ThreadComment(state: { comment: { comment: string; votes: number } }) {
  const classes = useStyles();
  return (
    <Card
      style={{
        width: "900px",
        maxWidth: "75%",
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
          <Typography variant="body1" style={{ wordWrap: "break-word" }}>
            {state.comment.comment}
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
          <Button>
            <Avatar className={classes.green}>
              <ThumbUpIcon />
            </Avatar>
          </Button>
          <Button>
            <Avatar className={classes.red}>
              <ThumbDownIcon />
            </Avatar>
          </Button>
          <Button>
            <Avatar className={classes.yellow}>
              <FlagIcon />
            </Avatar>
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ThreadComment;
