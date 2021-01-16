import React from 'react';
import { Link } from 'gatsby';

type Props = {
  href: string;
  children: React.ReactChild;
};

export const LinkBlock: React.FC<Props> = ({ href, children }: Props) => {
  if (href.match('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  const uri = href[0] !== '/' ? `/${href}` : href;
  return <Link to={uri}>{children}</Link>;
};
