import HomeHeader from './HomeHeader';
import HomeDetail from './HomeDetail';
import React from 'react';

export default function Home() {
  return (
    <div className={'vh-100 d-flex flex-column container justify-content-center'}>
      <HomeHeader />
      <HomeDetail />
    </div>
  );
}
