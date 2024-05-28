import React from 'react';
import './Song.css';

class Song extends React.Component{
    render(){
        const i = this.props.info;
        const id = this.props.id;
        return(
            <div className='song' id={'song-'+id}>
                <h3>
                    {id+1}
                </h3>
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