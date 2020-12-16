import React from 'react';
import styled from 'styled-components';

type Props = {
  url: string;
  name: string;
  icon: string;
};

export const SocialIcon: React.FC<Props> = ({ url, name, icon }: Props) => (
  <IconWrapper>
    <StyledLink href={url} target="_blank" rel="noopener">
      <Img src={`/images/${icon}`} alt={name} />
    </StyledLink>
  </IconWrapper>
);

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;
const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;
