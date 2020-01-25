import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./Auth";

export const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated() === "false") {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/dashboard",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};
