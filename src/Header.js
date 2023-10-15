import React from 'react';
import './Header.css';

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Header() {
  return (
    <div className='header'>
      

      <img
  className="icon"
  src="https://images.squarespace-cdn.com/content/v1/503bd485e4b0411ce5b1b9f3/1405971733067-EBZA82BAJ8Z9F2GR01R2/ke17ZwdGBToddI8pDm48kE3zglArHiMGY5P6DfHuO2EUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2di3bO5tWeH0OmHn7hORz0SYtbiXgyMyHFfrml8bKe9rTCjLISwBs8eEdxAxTptZAUg/image-asset.png" // Use "./" to specify the current directory
  alt="logo"
/>

      <div className='center'>
        <input type='text' />
        <SearchIcon /> {/* Using the SearchIcon component */}
        
      </div>

      <div className='right'>
        <p>become a host</p>
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <AccountCircleIcon/>
      </div>
    </div>
  );
}

export default Header;
