import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarComponent from "./components/navbar-components/NavBarComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePageComponent } from "./components/home-page-component/HomePageComponent";
import { FooterComponent } from "./components/footer-component/FooterComponent";
import { CheckoutComponent } from "./components/checkout-component/CheckoutComponent";
import { UserProfileComponent } from "./components/user-profile-component/UserProfileComponent";
import { EditProfileComponent } from "./components/edit-profile-component/EditProfileComponent";

function App() {
  // const [currentUser, setCurrentUser] = useState(
  //   new User(0, "", "", "", "", new Role(0, ""))
  // );

  return (
    <div className="App">
      {/* remember to switch to browser router */}
      <Router>
        <NavBarComponent />

        <Switch>
          {/* edit User profile component */}
          <Route 
            path="/edit"
            render={props => (
              <EditProfileComponent 
                history={props.history}
                match={props.match}
                location={props.location}
              />
            )}
          />
          {/* User profile component */}
          <Route 
            path="/profile"
            render={props => (
              <UserProfileComponent 
                history={props.history}
                match={props.match}
                location={props.location}
              />
            )}
          />
          {/* Checkout Component */}
          <Route
            path="/checkout"
            render={props => (
              <CheckoutComponent
                history={props.history}
                match={props.match}
                location={props.location}
                // currentUser={currentUser}
              />
            )}
          />
          {/* Home Page Component */}
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
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
