import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: var(--title-size);
  color: black;
  font-size: 30px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: gray;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 24px 24px 8px 24px;
`;

const HeaderRightContainer = styled.div`
  max-width: 60%;
  display: flex;
  justify-content: space-between;
`;

type Props = {
  title: string;
  children: React.ReactNode;
};

export type ToggleThemeMode = React.MouseEvent<HTMLButtonElement>;

const Header: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <H1>{title}</H1>
      </StyledLink>
      <HeaderRightContainer>{children}</HeaderRightContainer>
    </HeaderContainer>
  );
};

export default Header;
