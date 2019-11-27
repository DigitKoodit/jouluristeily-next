import * as React from 'react';
import styled from 'styled-components';
import { format, isAfter, isBefore, isWithinRange } from 'date-fns';
import { fonts, colors } from '../styles/stylesheet';
import Markdown from './Styled/Markdown';
import { fadeInTop } from './Styled/Common';

const Container = styled.div`
  ${fadeInTop}
  opacity: 0;
  width: 100%;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 10px;
  border-radius: 4px;
  background: rgba(255, 229, 120, 0.5);
  overflow: hidden;
  transition: all 0.1s ease-in-out;
  animation: fade-in-top ease 0.5s forwards;
  animation-delay: ${({ prop }: any) => prop}00ms;
  > * {
    font-size: 0.8rem;
  }
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${colors.lightyellow};
  }

  & > div {
    padding: 0px;
    & > h1,
    h2,
    h3,
    bold {
      font-weight: 600;
      padding: 5px 0px;
      font-family: ${fonts.paragraph};
      margin: 0;
    }
    & > p {
      font-family: ${fonts.paragraph};
      padding: 5px 0px;
      margin: 0;
    }
  }
`;

const Active = styled(Container)`
  &:after {
    position: absolute;
    content: '';
    height: 300px;
    width: 300px;
    background: ${colors.red};
    opacity: 0.5;
    right: -100px;
    transform: rotate(45deg);
    top: -50px;
  }
`;

const Label = styled.h4`
  padding-bottom: 5px;
  margin: 0px;
  font-family: ${fonts.secondary};
  max-width: 80%;
`;

const Time = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
`;

const Deck = styled.span`
  font-size: 0.8rem;
  position: absolute;
  font-weight: 600;
  top: 10px;
  right: 10px;
`;

interface Props {
  event: CruiseEvent;
  open: boolean;
  index: number;
  onClick?: (x?: any) => void;
}

const Event: React.SFC<Props> = props => {
  const { event, onClick, open, index } = props;
  const { title, startTime, endTime, deck, location, description } = event;
  const timeString = `${format(startTime, 'HH:mm', { locale: 'fi' })} ${
    endTime ? format(endTime, '- HH:mm', { locale: 'fi' }) : ''
  }`;
  const deckString = `${deck ? `Kansi ${deck}` : ''}`;
  const locationString = `${location ? location : ''} `;
  const currentTime = new Date();
  const comparable = !!startTime && !!endTime;
  const isActive = comparable && isWithinRange(currentTime, startTime, endTime);
  const Wrapper = isActive ? Active : Container;
  return (
    <Wrapper prop={index} onClick={onClick}>
      <Label>{title}</Label>
      <Deck>{deckString}</Deck>
      <Time>
        {timeString} {locationString}
      </Time>
      <Markdown content={open ? description : ''} />
    </Wrapper>
  );
};

export default Event;
