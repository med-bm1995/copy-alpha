import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetch_all_post } from "../src/js/actions/postActions";
import { getAuthUser } from "./js/actions/authActions";
import { Spinner } from "reactstrap";

import AppNavbar from "./components/AppNavBar";

import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post//Post";
import Formm from "./components/Form/Form";
import Home from "./components/pages/Home";
import PrivateRoute from "./components/routes/PrivateRoute";
import Dashboard from "./components/pages/Dashboard";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_all_post());
  }, []);
  const { isLoading } = useSelector((state) => state.authReducer);
  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spinner
          style={{ width: "3rem", height: "3rem", color: "secondary" }}
          type="grow"
        />
      </div>
    );
  }
  return (
    <div>
      <BrowserRouter>
        <AppNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
