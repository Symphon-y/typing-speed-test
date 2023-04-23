import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { NextPage } from 'next';
import SpeedTest from '@/components/Home/containers/SpeedTest';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Typing Speed Test </title>
        <meta name='description' content='Typing speed test' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <SpeedTest />
      </main>
    </>
  );
};

export default Home;
