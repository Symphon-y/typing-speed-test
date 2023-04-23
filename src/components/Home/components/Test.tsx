import { TextField } from '@mui/material';
import React from 'react';
const style = {
  backgroundColor: '#292929',
};
const Test = () => {
  return (
    <>
      <TextField
        fullWidth
        id='standard-basic'
        label='Standard'
        variant='standard'
        sx={style}
      />{' '}
    </>
  );
};

export default Test;
