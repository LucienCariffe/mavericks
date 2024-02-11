
import React from 'react';
import BasicTabs from './tab';
import {
  Box,
  Toolbar,
  AppBar
} from '@mui/material';

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>

          <img
            src="https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg"
            alt="mavericks logo"
            style={{ maxHeight: '70px', marginRight: '10px' }} // Adjust the styling here
          />

        </Toolbar>
      </AppBar>
      <Box>
        {/* Assuming BasicTabs is another component */}
        <BasicTabs />
      </Box>
    </>
  );
};

export default Header;
