import React from 'react';
import Link from 'next/link';

import NavBarItem from '../nav/NavBarItem';

const PageLink = ({
  children,
  href,
  className,
  testId
}: {
  children?: any;
  href?: any;
  className?: any;
  testId?: any;
}) => {
  return (
    <Link href={href}>
      <a id={testId} className={className}>
        {children}
      </a>
    </Link>
  );
};

export default PageLink;
