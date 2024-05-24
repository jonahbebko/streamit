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

    handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            await this.onSearchSubmit();
        }
    }

    onSearchSubmit = async () => {
        const response = await youtube.get('/search', {
            params: { q: document.getElementById('song-input').value }
        });
        console.log(response.data.items);
        this.setState({ songs: response.data.items });
    }

    render() {
        return (
            <div className='Search'>
                <div className='song-searchbar'>
                    <input id='song-input' className='song-input' type='text' 
                        placeholder='search for a song...' onKeyDown={this.handleKeyPress} />
                    <button id='song-submit-button' className='song-submit-button' onClick={this.onSearchSubmit}>submit</button>
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