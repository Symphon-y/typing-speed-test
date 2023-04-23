import { QWERTY } from '@/assets/QWERTY';
import KeyRowGenerator from '@/components/Keyboard/KeyRowGenerator';
import { Box } from '@mui/material';
import React from 'react';

const Keyboard = () => {
  //TODO: set this in context
  const board = QWERTY;
  const color: { [key: string]: string } = {
    0: 'red',
    1: 'yellow',
    2: 'green',
    3: 'blue',
    4: 'pink',
    5: 'purple',
    6: 'orange',
  };
  const content = board.map((row, index) => {
    const clr: string = color[index];
    return (
      <div key={index} style={{ backgroundColor: `${color[index]}` }}>
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
