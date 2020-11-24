import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SeoQuery } from '../../types/graphql-types';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string | null;
  desc?: string | null;
  banner?: string | null;
  pathname?: string | null;
  article: boolean;
};

type JsonLDType = {
  '@context': string;
  '@type': string;
  '@id'?: string;
  url?: string;
  name?: string;
  alternateName: string;
  headline?: string;
  image?: {
    '@type': string;
    url: string;
  };
  description?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': string;
    name?: string;
  };
  publisher?: {
    '@type': string;
    name?: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
  isPartOf?: string;
  mainEntityOfPage?: {
    '@type': string;
    '@id'?: string;
  };
};

// const Component: React.FC<Props> = ({ title, desc, banner, pathname, article }: Props) => (
const Component: React.FC<Props> = ({ title, desc, banner, pathname, article }: Props) => {
  const data: SeoQuery = useStaticQuery(graphql`
    query SEO {
      site {
        buildTime(formatString: "YYYY年MM月DD日")
        siteMetadata {
          defaultTitle: title
          author
          siteLanguage
          logo
          siteUrl: url
          pathPrefix
          defaultDescription: description
          defaultBanner: banner
          twitter
          shortName
          titleAlt
        }
      }
    }
  `);
  const seo = {
    title: title ?? data.site?.siteMetadata?.defaultTitle ?? undefined,
    description: desc ?? data.site?.siteMetadata?.defaultDescription ?? undefined,
    image: `${data.site?.siteMetadata?.siteUrl}${banner ?? data.site?.siteMetadata?.defaultBanner}`,
    url: `${data.site?.siteMetadata?.siteUrl}${pathname ?? '/'}`,
  };
  const realPrefix =
    data.site?.siteMetadata?.pathPrefix === '/' ? '' : data.site?.siteMetadata?.pathPrefix;
  let schemaOrgJSONLD: Array<JsonLDType> = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': data.site?.siteMetadata?.siteUrl ?? undefined,
      url: data.site?.siteMetadata?.siteUrl ?? undefined,
      name: data.site?.siteMetadata?.defaultTitle ?? undefined,
      alternateName: data.site?.siteMetadata?.titleAlt ?? '',
      headline: undefined,
      image: undefined,
      description: undefined,
      datePublished: undefined,
      dateModified: undefined,
      author: undefined,
      publisher: undefined,
      isPartOf: undefined,
      mainEntityOfPage: undefined,
    },
  ];
  if (article) {
    schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        '@id': seo.url,
        url: seo.url,
        name: title ?? undefined,
        alternateName: data.site?.siteMetadata?.titleAlt ?? '',
        headline: title ?? undefined,
        image: {
          '@type': 'ImageObject',
          url: seo.image,
        },
        description: seo.description,
        datePublished: data.site?.buildTime,
        dateModified: data.site?.buildTime,
        author: {
          '@type': 'Person',
          name: data.site?.siteMetadata?.author ?? undefined,
        },
        publisher: {
          '@type': 'Organization',
          name: data.site?.siteMetadata?.author ?? undefined,
          logo: {
            '@type': 'ImageObject',
            url: `${data.site?.siteMetadata?.siteUrl}${realPrefix}${data.site?.siteMetadata?.logo}`,
          },
        },
        isPartOf: data.site?.siteMetadata?.siteUrl ?? undefined,
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': data.site?.siteMetadata?.siteUrl ?? undefined,
        },
      },
    ];
  }
  return (
    <>
      <Helmet title={seo.title}>
        <html lang={data.site?.siteMetadata?.siteLanguage ?? undefined} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta
          name="apple-mobile-web-app-title"
          content={data.site?.siteMetadata?.shortName ?? undefined}
        />
        <meta name="application-name" content={data.site?.siteMetadata?.shortName ?? undefined} />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

        {/* OpenGraph  */}
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content={article ? 'article' : undefined} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={data.site?.siteMetadata?.twitter ?? undefined} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>
    </>
  );
};

export default Component;
