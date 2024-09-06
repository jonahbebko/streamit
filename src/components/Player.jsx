import { useState } from 'react';
import React from 'react';
import './Player.css';

class Player extends React.Component{
    render() {
        return(
            <div id='player'>
                <div id='player-info'>
                    <img id='player-thumbnail' src={this.props.thumbnail} />
                    <div id='player-title'>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.artist}</p>
                    </div>
                </div>
                <div id='player-controls'>
                    <button id='player-prev' onClick={this.props.prev}>prev</button>
                    <button id='player-play' onClick={this.props.play}>play</button>
                    <button id='player-next' onClick={this.props.next}>next</button>
                </div>
            </div>
        )
    }
}

export default Player;