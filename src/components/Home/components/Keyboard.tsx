import { QWERTY } from '@/assets/QWERTY';
import KeyRowGenerator from '@/components/Keyboard/KeyRowGenerator';
import { Box, Paper } from '@mui/material';
import React from 'react';

const Keyboard = () => {
  //TODO: set this in context
  const board = QWERTY;

  const content = board.map((row, index) => {
    return (
      <div key={index}>
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
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'space-between',
          }}>
          {content}
        </Paper>
      </Box>
    </>
  );
};

export default Keyboard;
