import { QWERTY } from '@/assets/QWERTY';
import KeyRowGenerator from '@/components/Keyboard/KeyRowGenerator';
import { Box } from '@mui/material';
import React from 'react';

const Keyboard = () => {
  //TODO: set this in context
  const board = QWERTY;

  const content = board.map((row, index) => {
    return (
      <div key={index} style={{ backgroundColor: '#292929' }}>
        <KeyRowGenerator key={index} keyRow={row} />
      </div>
    );
  });

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        width='100vw'
        justifyContent='center'
        alignItems='center'>
        {content}
      </Box>
    </>
  );
};

export default Keyboard;
