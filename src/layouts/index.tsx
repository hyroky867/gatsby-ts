import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { LayoutsQuery } from '../../types/graphql-types';

type Props = {
  children: React.ReactNode;
};

const Component: React.FC<Props> = ({ children }: Props) => {
  const data: LayoutsQuery = useStaticQuery(graphql`
    query Layouts {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Link to="/">
        <h3>{data.site?.siteMetadata?.title} Layout</h3>
      </Link>
      <Link to="/about">About</Link>
      {children}
    </>
  );
};

export default Component;
