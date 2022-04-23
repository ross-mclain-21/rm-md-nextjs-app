import React, { useContext } from 'react';

import Home from '../components/home/Home';

import { scrollTo } from '../components/common/CommonFunctions';
import GlobalContext from '../components/common/GlobalContext';
import MoreAboutMe from '../components/home/MoreAboutMe';

export default function Index() {
  const { homeRef } = useContext(GlobalContext);

  let scrollToElement = () => {
    scrollTo(homeRef);
  };
  return (
    <div>
      <Home />
      <MoreAboutMe />

      <div className="d-flex align-items-center justify-content-center p-3">
        <button
          className="btn btn-link ff-press-start"
          onClick={() => {
            scrollToElement();
          }}>
          <h5 className="mb-0">BACK TO TOP</h5>
        </button>
      </div>
    </div>
  );
}
