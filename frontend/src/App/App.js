import React, { Component } from 'react';
import { INIT_UI } from './ducks/ui';
import store from './../store';
import Main from './components/Main/MainComponent';
import './App.css';

class App extends Component {
    componentDidMount() {
        setTimeout(() => {
            store.dispatch({type: INIT_UI});
        }, 2000);
    }

    render() {
        return (
            <Main/>
        );
    }
}

export default App;
