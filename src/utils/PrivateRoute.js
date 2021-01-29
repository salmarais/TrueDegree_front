import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from '../utils/utils'

function PrivateRoute({ children, ...rest }) {
    return (
        <Route 
        {...rest}
        render={({ location }) =>
          true ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    //   <Route 
    //   {...rest}
    //   render={({ location }) =>
    //     localStorage.getItem('token') ? (
    //       children
    //     ) : (
    //       <Redirect
    //         to={{
    //           pathname: "/login",
    //           state: { from: location }
    //         }}
    //       />
    //     )
    //   }
    // />
    );
  }
export default PrivateRoute;