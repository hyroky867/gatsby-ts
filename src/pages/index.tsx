import React from 'react';
import { SocialIcons } from '../components/SocialIcons';
import { SEO } from '../components/SEO';
import Container from '../components/Container';
import { info } from '../info';
import { SectionTitle } from '../components/SectionTitle';

const IndexPage: React.FC<{}> = () => (
  <>
    <SEO article={false} />
    <Container>
      <SectionTitle content={info.title} alignCenter />
      <SocialIcons links={info.links} />
    </Container>
  </>
);
export default IndexPage;
