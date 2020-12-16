import * as React from 'react';
import styled from 'styled-components';
import { SocialIcon } from './SocialIcon';

type Link = {
  url: string;
  name: string;
  icon: string;
};

type Props = {
  links: Link[];
};

export const SocialIcons: React.FC<Props> = ({ links }: Props) => {
  return (
    <IconsWrapper>
      {links.map(({ url, name, icon }: Link) => {
        return <SocialIcon url={url} name={name} icon={icon} key={name} />;
      })}
    </IconsWrapper>
  );
};

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;
