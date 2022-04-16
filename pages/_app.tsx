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
  const [homeRef, setHomeRef] = useState<RefObject<any>>(null);
  const [developRef, setDevelopRef] = useState<RefObject<any>>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <UserProvider>
      <GlobalContext.Provider value={{ homeRef, setHomeRef, developRef, setDevelopRef, hasScrolled, setHasScrolled }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </UserProvider>
  );
}
