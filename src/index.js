import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import GameView from './components/game-view/GameView';
import './index.css';

ReactDOM.render((
    <Router history={history}>
        <Route path="/" component={GameView}/>
    </Router>), document.getElementById('root'));
