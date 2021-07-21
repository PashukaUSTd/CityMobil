import React, { Component } from 'react';


class Display extends Component {
    render() {
        return (
            <div className="display-wrapper">
                <p className="display-description">Вы выбрали: {this.props.selected}</p>
            </div>
        )
    }
}

export default Display;