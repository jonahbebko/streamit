import React from 'react';
import './Song.css';

class Song extends React.Component{
    render(){
        const i = this.props.info;
        return(
            <div className='song'>
                <img src={i.snippet.thumbnails.high.url} />
                <div>
                    <h3>{i.snippet.title
                                    .replace('&#39;', '\'')
                                    .replace('&quot;', '\'')
                                    .replace('&amp;', '&')
                        }</h3>
                    <p>{i.snippet.channelTitle
                                    .replace('&#39;', '\'')
                                    .replace('&quot;', '\'')
                                    .replace('&amp;', '&')
                        }</p>
                </div>
            </div>
        )
    }
}

export default Song;