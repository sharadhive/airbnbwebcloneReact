import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import Search from './Search';

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='bannerSearch'>
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className='sButton'
          variant='outlined'>
            {!showSearch ? "search Dates":"Hide"}
           </Button>


      </div>
      <div className='info'>
        <h1>Welcome to the heaven and boost your day</h1>
        <h5>
          Plan your holiday and enjoy every moment with happiness and joy
        </h5>
        <Button className='exploreButton' variant='outlined'>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
