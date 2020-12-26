import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderTitle = styled.span`
  color: var(--title-color);
  font-size: var(--title-size);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: var(--sub-text-color);
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
        <HeaderTitle>{title}</HeaderTitle>
      </StyledLink>
      <HeaderRightContainer>{children}</HeaderRightContainer>
    </HeaderContainer>
  );
};

export default Header;
