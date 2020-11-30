import { parseISO, format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

type Props = {
  dateString: string;
};

export const Date: React.FC<Props> = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <Time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</Time>;
};

const Time = styled.time`
  margin: 0;
  font-size: var(--small-size);
  line-height: 24px;
  color: var(--sub-text-color);
  word-break: break-word;
`;
