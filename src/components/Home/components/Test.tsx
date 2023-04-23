import SpeedTestContext from '@/context/SpeedTestContext/SpeedTestContext';
import { TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
const style = {
  alignSelf: 'center',
  backgroundColor: 'white',
  width: '50rem',
};
const Test = () => {
  const { setUserInput } = useContext(SpeedTestContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserInput(value);
  };

  return (
    <>
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
