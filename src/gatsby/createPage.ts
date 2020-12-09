import { MicrocmsBlog, MicrocmsBlogEdge } from '../../types/graphql-types';
import path from 'path';
import type { GatsbyNode } from 'gatsby';
import { MicrocmsBlogConnection } from '../../types/graphql-types';

type Result = {
  allMicrocmsBlog: MicrocmsBlogConnection;
};

export const createPage: GatsbyNode['createPages'] = async ({
  actions: { createPage },
  graphql,
}): Promise<void> => {
  const allMicrocmsBlog = `
    {
      allMicrocmsBlog {
        edges {
          node {
            id
          }
        }
      }
    }
  `;

  const blogData = await graphql<Result>(allMicrocmsBlog);
  if (blogData.errors || !blogData.data) {
    throw blogData.errors;
  }

  const contents: MicrocmsBlogEdge[] = blogData.data.allMicrocmsBlog.edges;

  // create single
  contents.map((edge: MicrocmsBlogEdge) => {
    const article: MicrocmsBlog = edge.node;
    createPage({
      path: `/blog/${article.id}`,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        article,
      },
    });
  });
};
