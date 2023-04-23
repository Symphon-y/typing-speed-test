import React, { useState } from 'react';
import SpeedTestContext from './SpeedTestContext';

interface SpeedTestContextProviderProps {
  children: JSX.Element;
}
const SpeedTestContextProvider = ({
  children,
}: SpeedTestContextProviderProps) => {
  const [test, setTest] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');

  const speedTestContext = {
    test,
    setTest,
    userInput,
    setUserInput,
  };

  return (
    <SpeedTestContext.Provider value={speedTestContext}>
      {children}
    </SpeedTestContext.Provider>
  );
};

export default SpeedTestContextProvider;
