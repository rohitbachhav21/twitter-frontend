
import SearchIcon from '@mui/icons-material/Search';


import React, { useState } from 'react';
import './Explore.css'
const accessToken = 'your_twitter_api_access_token_here';

function Explore() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = encodeURIComponent(searchInput);
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=%23${searchTerm}`;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.statuses);
      })
      .catch(error => console.error(error));
  }

  return (
    <div className='explore_section' style={{width:"38rem"}}>
  
      <div className="explore_input" onChange={handleSubmit}>
                <SearchIcon className="explore_searchIcon" />
                <input type="text" placeholder="SearchTwitter" value={searchInput} onChange={handleInputChange} />
            </div>
      <ul>
        {searchResults.map(tweet => (
          <li key={tweet.id}>
            <img src={tweet.user.profile_image_url} alt={tweet.user.name} />
            <div>
              <p>{tweet.user.name}</p>
              <p>{tweet.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Explore;
