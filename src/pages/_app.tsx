import SpeedTestContextProvider from '@/context/SpeedTestContext/SpeedTestContextProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedTestContextProvider>
        <Component {...pageProps} />
      </SpeedTestContextProvider>
    </>
  );
}
