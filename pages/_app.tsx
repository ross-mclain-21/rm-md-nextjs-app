import { AppProps } from 'next/app';
import React, { RefObject, useEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.scss';
import GlobalContext from '../components/common/GlobalContext';
import * as ga from '../utils/googleAnalytics';
import { useRouter } from 'next/router';

initFontAwesome();

const App = ({ Component, pageProps }: AppProps) => {
  const [homeRef, setHomeRef] = useState<RefObject<any>>(null);
  const [developRef, setDevelopRef] = useState<RefObject<any>>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <UserProvider>
      <GlobalContext.Provider value={{ homeRef, setHomeRef, developRef, setDevelopRef, hasScrolled, setHasScrolled }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </UserProvider>
  );
};
export default App;
