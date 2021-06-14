import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CurrUserContext from '../auth/CurrUserContext';


function ProtectedRoute({ exact, path, children }) {
    const { currUser } = useContext(CurrUserContext);

  console.debug(
      "PrivateRoute",
      "exact=", exact,
      "path=", path,
      "currentUser=", currUser,
  );

  if (!currUser) {
    return <Redirect to="/login" />;
  }

  return (
      <Route exact={exact} path={path}>
        {children}
      </Route>
  );
}

export default ProtectedRoute;
