import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Dashboard from "../components/Dashboard";
import EditExpensePage from "../components/EditExpensePage";
import CreateExpensePage from "../components/CreateExpensePage";
import FourOhFour from "../components/FourOhFour";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/create" component={CreateExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
