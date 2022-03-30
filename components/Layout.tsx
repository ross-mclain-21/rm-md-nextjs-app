import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';

import NavBar from './nav/NavBar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>McLain Development</title>
    </Head>
    <main id="app" className="d-flex flex-column h-100" data-testid="layout">
      <NavBar />
      {children}
    </main>
  </>
);

export default Layout;
