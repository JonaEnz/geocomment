import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { AccountCircle, VpnKey, Lock } from "@material-ui/icons";
import { useUserContext } from "../../contexts/UserContext";
import { Service as ApiService } from "../../api/services/Service";
import { OpenAPI } from "../../api";

function Login() {
  const { userCredentials, setUserCredentials } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ApiService.login({ email: username, password: password }).then(
      (resp) => {
        console.log(resp);
        setUserCredentials({ email: username, token: resp.token });
        OpenAPI.WITH_CREDENTIALS = true;
        OpenAPI.TOKEN = resp.token;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  const classes = useStyles();
  return (
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
            <Button
              variant="contained"
              color="primary"
              endIcon={<VpnKey />}
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
        </form>
      </Grid>
    </Paper>
  );
}

export default Login;
function useStyles() {
  throw new Error("Function not implemented.");
}
