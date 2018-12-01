import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import routes from '../config/routes';

const Navigator = props => {
    return (
        <Switch>
            {routes.map((route, i) => {
                const View = route.component;

                return (
                    <Route
                        key={i}
                        exact
                        path={route.path}
                        render={routeProps => (
                            <View {...props} {...routeProps} />
                        )}
                    />
                );
            })}
        </Switch>
    );
};

export default withRouter(Navigator);
