import React from 'react';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
    console.log("LOGOUT")
    handleClose();
  }
  const navigate = useNavigate(); // Corrected: Added parentheses to useNavigate

  return (
    <div>
      <div className='py-5'>
        <img src="/logo513.png" alt="Gym Logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <div className='space-y-6'>
        {navigationMenu.map((item) => (
          <div
            key={item.title} // Added key prop for each navigation item
            className='cursor-pointer flex space-x-3 items-center'
            onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)}
          >
            {item.icon}
            <p className='text-x1'>{item.title}</p>
          </div>
        ))}
        <div className='py-10'>
          <Button
            sx={{
             width: "100%",
             borderRadius: "29px",
             py: "15px", 
             bgcolor: '#1e88e5',
             }} // Adjusted button size and font size
            variant='contained'
          >
            WORKOUT
          </Button>
        </div>
      </div>
      <div> 


      </div>
      <div className='flex item-center justify-between'>
        <div className='flex items-center space-x-3'>
          <Avatar alt="username"
          altname="username"
          src='/logo512.png'
          />
          <div>
            <span>Sagar</span>
            <span className='opacity-70'>@sagar123</span>

            
          </div>
          
          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
        
      </Menu>
        </div>

      </div>
    </div>
  );
};

export default Navigation;
