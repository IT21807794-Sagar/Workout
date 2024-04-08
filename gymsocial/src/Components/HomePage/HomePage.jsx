import React from 'react';
import Grid from '@mui/material/Grid';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';

const HomePage = () => {
  return (
    <div>
      <Grid container justifyContent="center" spacing={2} className='px-5 lg:px-36'>
        <Grid item xs={12} lg={2.5}>
          <Navigation />
        </Grid>
        <Grid item xs={12} lg={6}>
          <p className='text-center'>
            <HomeSection/>
          </p>
        </Grid>
        <Grid item xs={12} lg={2.5}>
          <p className='text-center'>right part</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
