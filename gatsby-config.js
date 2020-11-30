require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./config/site');

const url = `https://${process.env.DOMAIN}`;

module.exports = {
  siteMetadata: {
    ...config
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: url,
        sitemap: `${url}/sitemap.xml`,
        policy: [
          {
            userAgent: '*',
            allow: '/',
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: `${process.env.MICROCMS_API_KEY}`,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [{
          endpoint: process.env.MICROCMS_ENDPOINT,
        }],
      },
    },
  ]
}