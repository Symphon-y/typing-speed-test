import React, { useEffect } from 'react';

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

  return <>Hello World</>;
};

export default SpeedTest;
