import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Container from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';
import { Date } from '../components/Date';
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
  data: GatsbyTypes.ContentsQuery;
};

const BlogIndex: React.FC<Props> = ({ data }: Props) => {
  return (
    <Layout>
      <SEO title={process.env.GATSBY_SITE_TITLE ?? ''} article={false} />
      <Container>
        {data.allContentfulBlogPost.edges.map((edge) => {
          const { node } = edge;
          return (
            <Article key={node.id}>
              <header>
                <Date dateString={node.publishDate ?? ''} />
                <StyledLink to={`/blog/${node.id}/`}>
                  <SectionTitle content={node.title ?? ''} alignCenter={false} />
                </StyledLink>
              </header>
            </Article>
          );
        })}
      </Container>
    </Layout>
  );
};

export const contentsQuery = graphql`
  query Contents {
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          id
          publishDate
        }
      }
    }
  }
`;

export default BlogIndex;
