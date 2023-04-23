import { createContext } from 'react';

interface SpeedTestContextState {
  test: string;
  setTest: React.Dispatch<React.SetStateAction<string>>;
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

const SpeedTestContext = createContext<SpeedTestContextState>(
  {} as SpeedTestContextState
);

export default SpeedTestContext;
