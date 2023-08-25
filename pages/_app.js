import React, {useEffect, useState} from 'react';
import {Layout} from '../components';

import '@/styles/globals.css'
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />  
  </Layout>
  )
  }
  //new

export default App;
