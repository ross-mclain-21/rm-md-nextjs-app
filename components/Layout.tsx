import React, { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';

import NavBar from './nav/NavBar';
import Script from 'next/script';

const Layout = ({ children }) => {
  const appRef = useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <>
      <Head>
        <title>McLain Development</title>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
          }}
        />
      </Head>
      <main ref={appRef} id="app" className="d-flex flex-column h-100 pt-5" data-testid="layout">
        <NavBar appRef={appRef} />
        {children}
      </main>
    </>
  );
};

export default Layout;
