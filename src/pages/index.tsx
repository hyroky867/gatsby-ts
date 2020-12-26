import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Container from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Date } from '../components/Date';
import { ContentsQuery } from '../../types/graphql-types';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const Article = styled.article`
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 48px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

type Props = {
  data: ContentsQuery;
};

const BlogIndex: React.FC<Props> = ({ data }: Props) => {
  return (
    <Layout>
      <SEO title={process.env.SITE_TITLE ?? ''} article={false} />
      <Container>
        {data.allMicrocmsBlog.edges.map((edge) => {
          const { node } = edge;
          return (
            <Article key={node.id}>
              <section>
                <Date dateString={node.publishedAt} />
                <h1>
                  <StyledLink to={`/blog/${node.id}/`}>
                    <SectionTitle content={node.title ?? ''} alignCenter={false} />
                  </StyledLink>
                </h1>
              </section>
            </Article>
          );
        })}
      </Container>
    </Layout>
  );
};

export const contentsQuery = graphql`
  query Contents {
    allMicrocmsBlog(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          body
          publishedAt
        }
      }
    }
  }
`;

export default BlogIndex;
