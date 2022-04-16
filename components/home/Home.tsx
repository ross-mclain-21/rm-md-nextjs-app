import HomeHeader from './HomeHeader';
import HomeDetail from './HomeDetail';
import React, { useContext, useEffect, useRef } from 'react';
import ButWaitThereIsMore from './ButWaitThereIsMore';
import GlobalContext from '../common/GlobalContext';

export default function Home() {
  const { setHomeRef } = useContext(GlobalContext);
  const homeRef = useRef();

  useEffect(() => {
    setHomeRef(homeRef);
  }, []);

  return (
    <div ref={homeRef} className={'vh-100 d-flex flex-column container justify-content-between'}>
      <HomeHeader />
      <HomeDetail />
      <ButWaitThereIsMore />
    </div>
  );
}
