import path from 'path';
import { Actions, CreatePagesArgs } from 'gatsby';

const query = `
{
  allContentfulBlogPost {
    edges {
      node {
        title
        publishDate
        id
        body {
          childMdx {
            body
          }
        }
      }
    }
  }
}
`;

type Result = {
  allContentfulBlogPost: GatsbyTypes.ContentfulBlogPostConnection;
};

export type PostContext = {
  node: GatsbyTypes.ContentfulBlogPost;
};

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

  const { edges } = result.data.allContentfulBlogPost;
  if (!edges) {
    throw new Error('undefined edges');
  }

  edges.map((edge: GatsbyTypes.ContentfulBlogPostEdge) => {
    const { node } = edge;
    if (node) {
      createPage<PostContext>({
        path: `/blog/${node.id}`,
        component: path.resolve('./src/templates/post.tsx'),
        context: { node },
      });
    }
  });
};
