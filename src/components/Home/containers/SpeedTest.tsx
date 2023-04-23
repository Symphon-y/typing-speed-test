import React, { useEffect } from 'react';
import Keyboard from '../components/Keyboard';
import { Box, Grid } from '@mui/material';
import Test from '../components/Test';

const SpeedTest = () => {
  const handleKeyDown = (e: KeyboardEvent) => {
    //Do stuff...
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Box>
      <Grid display='flex' flexDirection='column' gap='1rem'>
        <Test />
        <Keyboard />
      </Grid>
    </Box>
  );
};

export default SpeedTest;
