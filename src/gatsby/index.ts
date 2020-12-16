import { GatsbyNode } from 'gatsby';
import { createBlogPages } from './createBlogPages';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => Promise.all([await createBlogPages({ graphql, createPage })]);
