import { KeyBoardLayoutType, KeyCode } from '@/types/keyboardTypes';
import { Grid } from '@mui/material';
import React, { ReactElement } from 'react';

interface props {
  keyRow: KeyCode[];
}

const KeyRowGenerator = ({ keyRow }: props): ReactElement => {
  let row: JSX.Element[] = [];

  row = keyRow.map((key) => {
    const legend = key?.key;
    const code = key?.code;
    return (
      <Grid height='4rem' width='4rem' key={`${legend}, ${code}`}>
        {legend}
      </Grid>
    );
  }) as JSX.Element[];

  return (
    <Grid display='flex' flexDirection='row' width='100%'>
      {row}
    </Grid>
  );
};

export default KeyRowGenerator;
