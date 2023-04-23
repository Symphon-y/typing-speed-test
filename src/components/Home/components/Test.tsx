import SpeedTestContext from '@/context/SpeedTestContext/SpeedTestContext';
import { TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
const style = {
  alignSelf: 'center',
  color: '#292929',
  backgroundColor: 'white',
  width: '50rem',
};
const Test = () => {
  const { test, setUserInput } = useContext(SpeedTestContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserInput(value);
  };

  return (
    <>
      <Typography sx={style}>{test}</Typography>
      <TextField
        onChange={handleInputChange}
        label='value'
        id='standard-basic'
        variant='standard'
        sx={style}
      />{' '}
    </>
  );
};

export default Test;
