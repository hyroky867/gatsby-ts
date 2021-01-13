export const info: {
  title: string;
  icon: string;
  shortProfile: string;
  links: {
    type: string;
    url: string;
    name: string;
    icon: string;
  }[];
  jobs: {
    name: string;
    position: string;
    term: string;
    description: string;
  }[];
} = {
  title: `${process.env.SITE_TITLE}`,
  icon: 'avatar.jpg',
  shortProfile: `${process.env.DESCRIPTION}`,
  links: [
    {
      type: 'GitHub',
      url: `https://github.com/${process.env.GITHUB_ID}`,
      name: `${process.env.GITHUB_ID}`,
      icon: 'github_logo-light.png',
    },
    {
      type: 'Twitter',
      url: `https://twitter.com/${process.env.TWITTER_ID}`,
      name: `@${process.env.TWITTER_ID}`,
      icon: 'twitter_logo.png',
    },
  ],
  jobs: [
    {
      name: '',
      position: '',
      term: '',
      description: '',
    },
  ],
};
