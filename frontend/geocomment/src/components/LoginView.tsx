import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Paper } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useUserContext } from "../contexts/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function LoginView() {
  const { userCredentials, setUserCredentials } = useUserContext();
  const classes = useStyles();
  return (
    <div>
      <h1>LoginView</h1>
      <h3>email: {userCredentials.email}</h3>
      <h3>token: {userCredentials.token}</h3>
      <Paper>
        <form className={classes.root} autoComplete="off">
          <Grid container>
            <TextField required id="email" label="Email" />
            <TextField
              required
              id="password"
              label="Password"
              type="password"
            />
            <Grid item alignContent="center">
              <Button
                variant="contained"
                color="primary"
                endIcon={<VpnKeyIcon />}
                type="submit"
                onClick={() =>
                  setUserCredentials({
                    email: "max.mustermann@gmail.com",
                    token: "2dg638d3928h9283hd",
                  })
                }
              >
                login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default LoginView;
