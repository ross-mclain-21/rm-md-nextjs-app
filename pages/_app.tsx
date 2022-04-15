import { AppProps } from 'next/app';
import React, { RefObject, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.scss';
import GlobalContext from '../components/common/GlobalContext';

initFontAwesome();

export default function App({ Component, pageProps }: AppProps) {
  const [developRef, setDevelopRef] = useState<RefObject<any>>(null);

  return (
    <UserProvider>
      <GlobalContext.Provider value={{ developRef, setDevelopRef }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </UserProvider>
  );
}
