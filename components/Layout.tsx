import React, { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';

import NavBar from './nav/NavBar';

const Layout = ({ children }) => {
  const appRef = useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <>
      <Head>
        <title>McLain Development</title>
      </Head>
      <main ref={appRef} id="app" className="d-flex flex-column h-100 pt-5" data-testid="layout">
        <NavBar appRef={appRef} />
        {children}
      </main>
    </>
  );
};

export default Layout;
