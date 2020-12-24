import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../themes/GlobalStyle';
import Header from './Header';

const LayoutWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const LayoutContainer = styled.div`
  width: 100%;
  max-width: 680px;
`;

const Main = styled.main`
  width: 100%;
  box-sizing: border-box;
`;

const ModeButton = styled.button`
  background: none;
  border: 0;
  right: 0;
  cursor: pointer;
  :focus {
    border: 0;
    outline: none;
  }
`;

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }: Props) => {
  const stored = typeof window !== 'undefined' && localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = React.useState(stored === 'true' ? true : false);
  const toggleThemeMode = (): void => {
    setIsDarkMode(!isDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('isDarkMode', `${!isDarkMode}`);
    }
  };

  return (
    <LayoutWrapper>
      <GlobalStyle />
      <LayoutContainer>
        <Header title="Volare Viah">
          <ModeButton onClick={toggleThemeMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isDarkMode ? '#fff' : '#000'}
              stroke={isDarkMode ? '#fff' : '#000'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </ModeButton>
        </Header>
        <Main>{children}</Main>
      </LayoutContainer>
    </LayoutWrapper>
  );
};
