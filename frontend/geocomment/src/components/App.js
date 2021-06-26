import LoginView from "./LoginView";
import MapView from "./MapView";
import HistoryView from "./HistoryView";
import ThreadView from "./ThreadView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
        </div>
      </Router>
    </div>
  );
}

export default App;
