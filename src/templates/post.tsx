import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../components/SectionTitle';
import { Date } from '../components/Date';
import Container from '../components/Container';
import { Content } from '../components/Content';
import { Layout } from '../components/Layout';
import { BlogContext } from '../gatsby/createBlogPages';
import { SEO } from '../components/SEO';

type Props = {
  pageContext: BlogContext;
};

const PostTemplate: React.FC<Props> = ({ pageContext }: Props) => {
  return (
    <Layout>
      <SEO title={pageContext.node.title} article={true} />
      <Container>
        <Header>
          <SectionTitle content={pageContext.node.title ?? ''} alignCenter={false} />
          <Date dateString={pageContext.node.publishedAt ?? ''} />
        </Header>
        <section>
          <Content markdown={pageContext.node.body || ''} />
        </section>
      </Container>
    </Layout>
  );
};
export default PostTemplate;

const Header = styled.header`
  padding: 10px 0;
`;
