const url = `https://${process.env.DOMAIN}`

module.exports = {
  pathPrefix: '/',
  title: 'My Wonderful Website', // タイトル
  titleAlt: 'My Wonderful Website', // JSONLDのためのタイトル
  description: 'Welcome to my brilliant website.',
  url: url, // スラッシュなしのサイトURL
  siteUrl: `${url}/`, // スラッシュありのサイトURL
  siteLanguage: 'ja', // HTMLの言語（ここでは日本語）
  logo: '',
  banner: '',
  favicon: 'static/images/favicon.png', // ファビコン
  shortName: 'CoolSite', // サイトの略称、12文字以下
  author: 'so99ynoodles', // schemaORGJSONLDの作成者
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@so996ynoodles', // TwitterのID
};