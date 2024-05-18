import React from 'react';
import './Song.css';

class Song extends React.Component{
    render(){
        const i = this.props.info;
        return(
            <div className='song'>
                <img src={i.snippet.thumbnails.high.url} />
                <div>
                    <h3>{i.snippet.title.substring(0, 60) + (i.snippet.title.length > 60 ? '...' : '')}</h3>
                    <p>{i.snippet.channelTitle}</p>
                    <p>{i.statistics.viewCount} views, {i.statistics.likeCount} likes</p>
                </div>
            </div>
        )
    }
}

export default Song;