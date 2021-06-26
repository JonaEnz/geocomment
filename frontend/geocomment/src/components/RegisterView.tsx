import React, { FormEvent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Paper } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import { useUserContext } from "../contexts/UserContext";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Service as ApiService } from "../api/services/Service";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function RegisterView() {
  const { userCredentials, setUserCredentials } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [privateAcc, setPrivate] = useState<boolean>(false);

  const classes = useStyles();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ApiService.register({
      email: username,
      password: password,
      private: privateAcc,
    }).then(
      () => {
        ApiService.login({ email: username, password: password }).then((r) => {
          setUserCredentials({ email: username, token: r.token });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <div>
      <h1>Register View</h1>
      <h3>email: {userCredentials.email}</h3>
      <h3>token: {userCredentials.token}</h3>
      <Grid container justify="center">
        <Paper style={{ width: "300px" }}>
          <Grid justify="center" alignItems="center" direction="column">
            <form
              className={classes.root}
              autoComplete="off"
              onSubmit={(e) => submit(e)}
            >
              <Grid
                container
                justify="center"
                alignItems="center"
                style={{ padding: "10px" }}
              >
                <FormControl>
                  <TextField
                    required
                    id="email"
                    label="Email"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormGroup row>
                  <FormControlLabel
                    label="private"
                    control={
                      <Checkbox
                        checked={privateAcc}
                        onChange={(e) => setPrivate(e.target.checked)}
                        name="private"
                      />
                    }
                  />
                </FormGroup>
                <FormGroup row>
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
                </FormGroup>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default RegisterView;
