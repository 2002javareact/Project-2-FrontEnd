import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarComponent from "./components/navbar-components/NavBarComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePageComponent } from "./components/home-page-component/HomePageComponent";

function App() {
  // const [currentUser, setCurrentUser] = useState(
  //   new User(0, "", "", "", "", new Role(0, ""))
  // );

  return (
    <div className="App">
      {/* remember to switch to browser router */}
      <Router>
        <Switch>
          <NavBarComponent />

          {/* Home Page Component */}
          {/* {console.log("app render")} */}
          {/* Have to fix rendering issue with this component */}
          <Route
            path="/"
            render={props => (
              <HomePageComponent
                history={props.history}
                match={props.match}
                location={props.location}
                // currentUser={currentUser}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
