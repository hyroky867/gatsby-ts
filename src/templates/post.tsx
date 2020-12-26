import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Date } from '../components/Date';
import { Article } from '../components/Article';
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
      <Article>
        <section>
          <Date dateString={pageContext.node.publishedAt} />
          <h1>
            <SectionTitle content={pageContext.node.title ?? ''} alignCenter={false} />
          </h1>
        </section>
        <section>
          <Content markdown={pageContext.node.body || ''} />
        </section>
      </Article>
    </Layout>
  );
};
export default PostTemplate;
