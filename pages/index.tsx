import React from 'react';

import Home from '../components/home/Home';
import Develop from '../components/services/Develop';
import Build from '../components/services/Build';
import Create from '../components/services/Create';
import ServiceCarousel from '../components/services/ServiceCarousel';

export default function Index() {
  return (
    <div>
      <Home />
      <ServiceCarousel />
    </div>
  );
}
