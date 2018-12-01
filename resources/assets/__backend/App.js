import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

import Navigator from './core/Navigator';

class App extends Component {
    render() {
        return (
            <Router>
                <Navigator />
            </Router>
        );
    }
}

export default App;
