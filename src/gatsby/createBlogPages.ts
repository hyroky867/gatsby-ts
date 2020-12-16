import path from 'path';
import { Actions, CreatePagesArgs } from 'gatsby';
import { MicrocmsBlogConnection, SitePageContextNode } from '../../types/graphql-types';

type Result = {
  allMicrocmsBlog: MicrocmsBlogConnection;
};

export type BlogContext = {
  node: SitePageContextNode;
};

const query = `
  {
    allMicrocmsBlog {
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

export const createBlogPages = async ({
  graphql,
  createPage,
}: {
  graphql: CreatePagesArgs['graphql'];
  createPage: Actions['createPage'];
}): Promise<void> => {
  const result = await graphql<Result>(query);
  if (result.errors || !result.data) {
    throw result.errors;
  }

  const { edges } = result.data.allMicrocmsBlog;
  if (!edges) {
    throw new Error('undefined edges');
  }

  edges.map((edge: BlogContext) => {
    const { node } = edge;
    if (node) {
      createPage<BlogContext>({
        path: `/blog/${node.id}`,
        component: path.resolve('./src/templates/post.tsx'),
        context: { node },
      });
    }
  });
};
