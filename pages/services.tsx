import React from 'react';
import Develop from '../components/services/Develop';
import Build from '../components/services/Build';
import Create from '../components/services/Create';

const items = [
  {
    type: 'develop',
    component: <Develop />
  },
  {
    type: 'build',
    component: <Build />
  },
  {
    type: 'create',
    component: <Create />
  }
];

export default function Services() {
  return (
    <div className="d-flex flex-column">
      {items.map(item => (
        <div className="flex-fill" key={item.type}>
          <div className="container py-3">{item.component}</div>
        </div>
      ))}
    </div>
  );
}
