import React, { useEffect, useState } from 'react';
import SpeedTestContext from './SpeedTestContext';
import { typingTests } from '@/assets/typingTests';
import { Utilities } from '@/utilities/Utilities';

interface SpeedTestContextProviderProps {
  children: JSX.Element;
}
const SpeedTestContextProvider = ({
  children,
}: SpeedTestContextProviderProps) => {
  const [test, setTest] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const { randomNumber } = new Utilities();

  useEffect(() => {
    const randomTest = typingTests[randomNumber(7)];
    setTest(randomTest);
  }, []);

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
