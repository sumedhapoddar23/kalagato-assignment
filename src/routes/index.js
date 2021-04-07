import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import store from "../store/index";
import { routes } from "./routes";
import MakeSubRoutes from "./makeSubRoutes";
import { Provider } from "react-redux";

const Routes = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          {routes.map((route, index) => (
            <MakeSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Provider>
  );
};

export default Routes;
