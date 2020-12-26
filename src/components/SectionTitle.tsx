import React from 'react';
import styled from 'styled-components';

type Props = {
  content: string;
  alignCenter: boolean;
};

export const SectionTitle: React.FC<Props> = ({ content, alignCenter }: Props) => (
  <TitleSpan alignCenter={alignCenter}>{content}</TitleSpan>
);

type H2Props = { alignCenter: boolean };

const TitleSpan = styled.span`
  margin: 0;
  padding: 0 0 8px 0;
  text-align: ${({ alignCenter }: H2Props): string => (alignCenter ? 'center' : 'left')};
  font-size: var(--title-size);
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: var(--sub-text-color);
  }
`;
