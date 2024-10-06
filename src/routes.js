import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import History from "./pages/History";
import MainLayout from "./layouts/MainLayout";

const Routes = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/alerts" component={Alerts} />
          <Route path="/history" component={History} />
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default Routes;
