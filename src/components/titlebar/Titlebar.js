import React from 'react';
import './Titlebar.css'

export default class Titlebar extends React.Component {
    render() {
        return <div className="titleBar">{this.props.value}</div>
    }
}