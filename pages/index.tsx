import React from 'react';

import HomeHeader from '../components/home/HomeHeader';
import HomeDetail from '../components/home/HomeDetail';

export default function Index() {
  return (
    <div className={'d-flex flex-column container justify-content-center flex-fill'}>
      <HomeHeader />
      <HomeDetail />
    </div>
  );
}
