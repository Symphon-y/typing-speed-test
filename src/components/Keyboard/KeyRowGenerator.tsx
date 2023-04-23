import { KeyBoardLayoutType, KeyCode } from '@/types/keyboardTypes';
import { Grid } from '@mui/material';
import React, { ReactElement } from 'react';

interface props {
  keyRow: KeyCode[];
}

const KeyRowGenerator = ({ keyRow }: props): ReactElement => {
  let row: JSX.Element[] = [];

  //TODO Switch statement for key width

  row = keyRow.map((key) => {
    const legend = key?.key;
    const code = key?.code;
    let width = '4rem';
    let color = '#292929';

    const keyWidth: { [key: string]: string } = {
      Escape: '6rem',
      Backspace: '6rem',
      Tab: '8rem',
      Enter: '8rem',
      CapsLock: '8rem',
      ShiftLeft: '12rem',
      ShiftRight: '12rem',
      Space: '20rem',
    };

    console.log('width is', width);

    return (
      <Grid
        sx={{ backgroundColor: color }}
        height='4rem'
        width={keyWidth[code] ? keyWidth[code] : '4rem'}
        key={code}>
        {legend ? legend : code}
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
