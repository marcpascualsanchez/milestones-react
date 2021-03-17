import "../styles.css";
import Timeline from "./Timeline/Timeline";
import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import CreateTimelinePage from "./CreateTimelinePage/CreateTimelinePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Header isLoggedIn={false} />
        <Switch>
          <Route path="/new">
            <CreateTimelinePage />
          </Route>
          <Route path="/:id">
            <Timeline />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </div>
    </Router>
  );
}
