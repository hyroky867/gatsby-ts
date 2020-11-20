import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { LayoutsQuery } from '../../types/graphql-types';

type Props = {
  children: React.ReactNode;
};

export const query = graphql`
  query Layouts {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Component: React.FC<Props> = ({ children }: Props) => (
  <StaticQuery
    query={query}
    render={(data: LayoutsQuery): React.ReactNode => (
      <div>
        <Link to="/">
          <h3>{data.site?.siteMetadata?.title} Layout</h3>
        </Link>
        <Link to="/about">About</Link>
        {children}
      </div>
    )}
  />
);

export default Component;
