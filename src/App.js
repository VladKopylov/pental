import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './features/layout/Layout';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={Layout}/>
            </BrowserRouter>
        );
    }
}

export default App;