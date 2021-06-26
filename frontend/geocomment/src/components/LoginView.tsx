import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Paper } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function LoginView() {
  const classes = useStyles();
  return (
    <Paper>
      <form className={classes.root} autoComplete="off">
        <Grid container>
          <TextField required id="email" label="Email" />
          <TextField required id="password" label="Password" type="password" />
          <Grid item alignContent="center">
            <Button
              variant="contained"
              color="primary"
              endIcon={<VpnKeyIcon />}
              type="submit"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default LoginView;
