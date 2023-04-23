import { createContext } from 'react';

interface SpeedTestContextState {
  test: string;
  userInput: string;
}

const SpeedTestContext = createContext<SpeedTestContextState>(
  {} as SpeedTestContextState
);

export default SpeedTestContext;
