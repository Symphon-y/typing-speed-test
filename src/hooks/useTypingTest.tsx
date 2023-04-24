import React, {useEffect, useRef, useState} from 'react';

interface TypingStats {
    text: string;
    timeTaken: number;
    mistakes: number;
  }


interface TimerOptions {
    autostart?: boolean;
    interval?: number;
  }
  
  interface Timer {
    time: number;
    isRunning: boolean;
    wpm: number;
    start: () => void;
    stop: () => void;
    reset: () => void;
    calculateWPM: ({}: TypingStats) => void;
  }

const useTypingTest = ({
    autostart = false,
    interval = 1000,
  }: TimerOptions = {}): Timer => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [wpm, setWpm] = useState<number>(0)
    const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
      
    const start = () => {
      setIsRunning(true);
    };
  
    const stop = () => {
      setIsRunning(false);
    };
  
    const reset = () => {
      setTime(0);
    };


    const calculateWPM = ({ text, timeTaken, mistakes }: TypingStats): void => {
        // Calculate the total number of words in the prompt.
        const wordCount = text.trim().split(/\s+/).length;
      
        // Calculate the number of correctly typed words.
        const correctWords = wordCount - mistakes;
      
        // Calculate the WPM based on the correct words typed and time taken.
        const wpm = (correctWords / timeTaken) * 60;
      
        setWpm(wpm);
        ///TODO set this to local storage
      }
    
    useEffect(() => {
      if (autostart) {
        start();
      }
      return () => clearInterval(intervalRef.current);
    }, [autostart]);
  
    useEffect(() => {
      if (isRunning) {
        intervalRef.current = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, interval);
      } else {
        clearInterval(intervalRef.current);
      }
      return () => clearInterval(intervalRef.current);
    }, [isRunning, interval]);

    return {
      time,
      isRunning,
      wpm,
      start,
      stop,
      reset,
      calculateWPM,
    };
}

export default useTypingTest;