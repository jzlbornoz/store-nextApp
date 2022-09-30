import React from 'react';
import Head from 'next/head';
import { HomePage } from '@containers/HomePage';


export default function Home() {
  return (
    <>
      <Head>
        <title>YourStore | Home</title>
      </Head>
    <HomePage />
    </>
  );
}
