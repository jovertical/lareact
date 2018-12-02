import React, { Component } from 'react';
import MasterTemplate from './templates/MasterTemplate';

class Dashboard extends Component {
    render() {
        return (
            <MasterTemplate pageTitle="Dashboard">
                <h1>Dashboard</h1>
            </MasterTemplate>
        );
    }
}

export default Dashboard;
