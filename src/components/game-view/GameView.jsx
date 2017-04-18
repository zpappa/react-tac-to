import React from 'react';
import Titlebar from '../titlebar/Titlebar';
import Game from '../game/Game'
import SelectOpponent from '../select-opponent/SelectOpponent';
import './GameView.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


export default class GameView extends React.Component {
    render() {
        let title = (this.state && this.state.title) ? this.state.title : "REACT TAC TO!";
        return <div className="GameView">
                    <Titlebar value={title}/>
                    <Route path="/" component={SelectOpponent}/>
                    <Route path="/game" component={Game}/>
                </div>
    }

    setTitle(t) {
        this.setState({title: t});
    }
}
