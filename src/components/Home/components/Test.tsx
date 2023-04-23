import { TextField } from '@mui/material';
import React from 'react';
const style = {
  alignSelf: 'center',
  backgroundColor: 'white',
  width: '50rem',
};
const Test = () => {
  return (
    <>
      <TextField id='standard-basic' variant='standard' sx={style} />{' '}
    </>
  );
};

export default Test;
