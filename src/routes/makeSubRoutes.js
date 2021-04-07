import { Route, Redirect } from "react-router-dom";

const MakeSubRoutes = (route) => {
  const isAuthenticated = true;
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => {
        return isAuthenticated || !route.isPrivate ? (
          <route.component {...props} routes={route.routes} />
        ) : (
          <Redirect to="/unauthorized" />
        );
      }}
    />
  );
};

export default MakeSubRoutes;
