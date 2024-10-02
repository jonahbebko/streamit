import { useState, useEffect } from 'react';
import React from 'react';
import './Player.css';

class Player extends React.Component{
    render() {
        //const thumbnail = this.props.thumbnail;
        const thumbnail = 'logot512.png';
        const title = this.props.title;
        const artist = this.props.artist;
        const url = this.props.url;

        const prev = () => {
            return null;
        }

        const play = () => {
            return null;
        }

        const next = () => {
            return null;
        }

        return(
            <div className='Player'>
                <div className='Player-info'>
                    <img className='Player-thumbnail' src={thumbnail} />
                    <div className='Player-title'>
                        <h3>{title}</h3>
                        <p>{artist}</p>
                    </div>
                </div>
                <div className='Player-controls'>
                    <button className='Player-prev' onClick={prev}>prev</button>
                    <button className='Player-play' onClick={play}>play</button>
                    <button className='Player-next' onClick={next}>next</button>
                </div>
            </div>
        )
    }
}

export default Player;