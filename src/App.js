import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";

export default function App() {
  return (
    <Router>
      <Link to="/"></Link>
      <Switch>
        <Route path="/" exact>
          <Screen1 />
        </Route>
        <Route path="/screen2" exact>
          <Screen2 />
        </Route>
      </Switch>
    </Router>
  );
}
