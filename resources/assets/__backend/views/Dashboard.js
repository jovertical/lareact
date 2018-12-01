import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { NavigationDrawer, FontIcon, ListItem } from 'react-md';

const navItems = [
    {
        label: 'Dashboard',
        to: '/',
        icon: 'star',
    },
    {
        label: 'Admins',
        to: '/admins',
        icon: 'star',
    },
    {
        label: 'Products',
        to: '/products',
        icon: 'star',
    },
];

class Dashboard extends Component {
    render() {
        const { location } = this.props;

        const NavItemLink = ({ label, to, icon = '', exact = true }) => (
            <Route path={to} exact={exact}>
                {({ match }) => {
                    let leftIcon;

                    if (icon) {
                        leftIcon = <FontIcon>{icon}</FontIcon>;
                    }

                    return (
                        <ListItem
                            component={Link}
                            active={!!match}
                            to={to}
                            primaryText={label}
                            leftIcon={leftIcon}
                        />
                    );
                }}
            </Route>
        );

        return (
            <NavigationDrawer
                toolbarTitle="Dashboard"
                mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                navItems={navItems.map(props => (
                    <NavItemLink {...props} key={props.to} />
                ))}
                contentId="main-demo-content"
                contentStyle={{ minHeight: 'auto' }}
                contentClassName="md-grid"
            >
                <div>Dashboard</div>
            </NavigationDrawer>
        );
    }
}

export default Dashboard;
