const url = `https://${process.env.DOMAIN}`

module.exports = {
  pathPrefix: '/',
  title: process.env.SITE_TITLE, // タイトル
  titleAlt: process.env.SITE_TITLE, // JSONLDのためのタイトル
  description: process.env.DESCRIPTION,
  url: url, // スラッシュなしのサイトURL
  siteUrl: `${url}/`, // スラッシュありのサイトURL
  siteLanguage: 'ja', // HTMLの言語（ここでは日本語）
  logo: '',
  banner: '',
  favicon: 'static/images/favicon.png', // ファビコン
  shortName: process.env.SHORT_NAME, // サイトの略称、12文字以下
  author: process.env.AUTHOR,
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: `@${process.env.TWITTER_ID}`, // TwitterのID
};