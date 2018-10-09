import React, { Component } from 'react';
import { INIT_UI } from './ducks/ui';
import './App.css';

class App extends Component {
    componentDidMount() {
        setTimeout(() => {
            window.store.dispatch({type: INIT_UI});
        }, 2000);
    }

    render() {
        return (
            <div>
                Hello!
            </div>
        );
    }
}

export default App;
