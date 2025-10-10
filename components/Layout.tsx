import React, { MutableRefObject, useRef } from 'react';
import Head from 'next/head';

import NavBar from './nav/NavBar';
import Script from 'next/script';
import Galaxy from './home/Galaxy';

const Layout = ({ children }) => {
  const appRef = useRef(null) as MutableRefObject<HTMLInputElement>;

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
      <div style={{ top: 0, left: 0, right: 0, bottom: 0, position: 'absolute', zIndex: -1, overflow: 'hidden' }}>
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={2.2}
          glowIntensity={0.1}
          saturation={0}
          hueShift={0}
          speed={3}
          twinkleIntensity={0}
          rotationSpeed={0}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          transparent={true}
          starSpeed={0.8}
        />
      </div>
      <main ref={appRef} id="app" className="d-flex flex-column h-100 pt-5" data-testid="layout">
        <NavBar appRef={appRef} />
        {children}
      </main>
    </>
  );
};

export default Layout;
