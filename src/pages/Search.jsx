import youtube from '../youtube.js';
import Song from '../components/Song.jsx';
import React from 'react';
import './Search.css';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: [],
        };
    }

    onSearchSubmit = async () => {
        const response = await youtube.get('/search', {
            params: { q: document.getElementById('song-input').value }
        });
        const response2 = await youtube.get('/videos', {
            params: {
                id: response.data.items.map((item) => item.id.videoId).join(','),
                part: 'snippet,statistics',
            }
        })
        console.log(response2.data.items);
        this.setState({ songs: response2.data.items });
    }

    render() {
        return (
            <div className='Search'>
                <div className='song-searchbar'>
                    <input id='song-input' className='song-input' type='text' placeholder='search for a song...' />
                    <button className='song-submit-button' onClick={this.onSearchSubmit}>submit</button>
                </div>
                <div className='song-list'>
                    {this.state.songs.map((song) => {
                        return <Song info={song} />
                    })}
                </div>
            </div>
        )
    }
}

export default Search;