import React from "react";
import Login from "./Account/Login";
import { Grid } from "@material-ui/core";
import { useUserContext } from "../contexts/UserContext";

function LoginView() {
  const { userCredentials, setUserCredentials } = useUserContext();

  return (
    <div>
      <h1>LoginView</h1>
      <h3>email: {userCredentials.email}</h3>
      <h3>token: {userCredentials.token}</h3>
      <Grid container justify="center">
        <Login />
      </Grid>
    </div>
  );
}

export default LoginView;
