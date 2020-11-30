import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Container from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Date } from '../components/Date';
// import { BlogContent } from '../components/molecules/blogContent';
import SEO from '../components/SEO';
import { MicrocmsBlog, MicrocmsBlogEdge, Query } from '../../types/graphql-types';
import { Layout } from '../components/Layout';

const Article = styled.article`
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 48px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const BlogIndex: React.FC = () => {
  const data: Query = useStaticQuery(graphql`
    query BlogIndex {
      allMicrocmsBlog(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            blogId
            title
            publishedAt
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="BLOG" article={false} />
      <Container>
        {data.allMicrocmsBlog.edges.map((edge: MicrocmsBlogEdge) => {
          const article: MicrocmsBlog = edge.node;

          return (
            <Article key={article.blogId}>
              <header>
                <StyledLink to={article.id}>
                  <SectionTitle content={article.title ?? ''} alignCenter={false} />
                </StyledLink>
                <Date dateString={article.publishedAt} />
              </header>
            </Article>
          );
        })}
      </Container>
    </Layout>
  );
};
export default BlogIndex;
