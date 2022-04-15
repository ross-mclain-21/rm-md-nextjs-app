import HomeHeader from './HomeHeader';
import HomeDetail from './HomeDetail';
import React from 'react';
import ButWaitThereIsMore from './ButWaitThereIsMore';

export default function Home() {
  return (
    <div className={'vh-100 d-flex flex-column container justify-content-between'}>
      <HomeHeader />
      <HomeDetail />
      <ButWaitThereIsMore />
    </div>
  );
}
