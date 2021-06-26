import React from "react";
import { Grid } from "@material-ui/core";
import { useUserContext } from "../contexts/UserContext";
import Register from "./Account/Register";

function RegisterView() {
  const { userCredentials, setUserCredentials } = useUserContext();
  return (
    <div>
      <h1>Register View</h1>
      <h3>email: {userCredentials.email}</h3>
      <h3>token: {userCredentials.token}</h3>
      <Grid container justify="center">
        <Register />
      </Grid>
    </div>
  );
}

export default RegisterView;
