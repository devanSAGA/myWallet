import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import EditExpensePage from "../components/EditExpensePage";
import CreateExpensePage from "../components/CreateExpensePage";
import FourOhFour from "../components/FourOhFour";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/create" component={CreateExpensePage} />
          <Route path="/edit" component={EditExpensePage} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
