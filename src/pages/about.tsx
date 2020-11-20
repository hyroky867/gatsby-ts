import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../layouts';
import { PagesAboutQuery } from '../../types/graphql-types';

type Props = {
  data: PagesAboutQuery;
};

const Component: React.FC<Props> = ({ data }: Props) => (
  <Layout>
    <h1>{data.site?.siteMetadata?.title} About</h1>
    <p>This is the about page.</p>
  </Layout>
);

export const query = graphql`
  query PagesAbout {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Component;
