import React, { useEffect } from 'react';
import Keyboard from '../components/Keyboard';

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
    <>
      Hello World <Keyboard />
    </>
  );
};

export default SpeedTest;
