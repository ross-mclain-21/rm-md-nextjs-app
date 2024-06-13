import Link from 'next/link';

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
    <Link id={testId} href={href} className={className}>
      {children}
    </Link>
  );
};

export default PageLink;
