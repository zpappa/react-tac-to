import React from 'react';
import './Square.css';

export default class Square extends React.Component {
    getIconValue(value) {
        switch(value) {
            case 'X':
                return <div className="inner-square"><i className="fa fa-times"></i></div>;
                break;
            case 'O':
                return <div className="inner-square"><i className="fa fa-circle-o"></i></div>;
                break;
            default:
                return null;
                break;
        }
    }
    render() {
        return (
            <div className={this.props.value ? 'square selected' : 'square'} onClick={()=>this.props.onClick()}>
                {this.getIconValue(this.props.value)}
            </div>
        );
    }
}