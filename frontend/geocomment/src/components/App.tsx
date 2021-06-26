import LoginView from "./LoginView";
import MapView from "./MapView";
import HistoryView from "./HistoryView";
import ThreadView from "./ThreadView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { UserContext } from "../contexts/UserContext";
import React from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffe54c",
      main: "#ffb300",
      dark: "#c68400",
      contrastText: "#000",
    },
    secondary: {
      light: "#8bf6ff",
      main: "#4fc3f7",
      dark: "#0093c4",
      contrastText: "#000",
    },
  },
});

function App() {
  const [userCredentials, setUserCredentials] = React.useState({
    email: "",
    token: "",
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">MapView</Link>
                </li>
                <li>
                  <Link to="/login">LoginView</Link>
                </li>
                <li>
                  <Link to="/history">HistoryView</Link>
                </li>
                <li>
                  <Link to="/thread">ThreadView</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <UserContext.Provider
              value={{ userCredentials, setUserCredentials }}
            >
              <Switch>
                <Route path="/login">
                  <LoginView />
                </Route>
                <Route path="/history">
                  <HistoryView />
                </Route>
                <Route path="/thread">
                  <ThreadView />
                </Route>
                <Route path="/">
                  <MapView />
                </Route>
              </Switch>
            </UserContext.Provider>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
