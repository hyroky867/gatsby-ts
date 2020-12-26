import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const ArticleContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 24px 0;
  box-sizing: border-box;
`;

export const Article: React.FC<Props> = ({ children }: Props) => (
  <ArticleContainer>{children}</ArticleContainer>
);
