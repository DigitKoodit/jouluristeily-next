import * as React from 'react';
import styled from 'styled-components';
import { format, isAfter, isBefore } from 'date-fns';
import { fonts, colors } from '../styles/stylesheet';
import Markdown from './Styled/Markdown';

const Container = styled.div`
  width: 100%;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 10px;
  border-radius: 4px;
  background: rgba(255, 229, 120, 0.5);
  overflow: hidden;
  transition: all .1s ease-in-out;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${colors.lightyellow};
  }

  & > div {
    padding: 0px;
    & > h3 { font-size: .8rem; }
    & > p {
      font-family: ${fonts.paragraph}
      font-size: .9rem;
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
  onClick: (x?: any) => void;
}

const Event: React.SFC<Props> = props => {
  const { event, onClick, open } = props;
  const { title, startTime, endTime, deck, location, description } = event;
  const timeString = `${format(startTime, 'HH:mm', { locale: 'fi' })} ${
    endTime ? format(endTime, '- HH:mm', { locale: 'fi' }) : ''
  }`;
  const deckString = `${deck ? `Kansi ${deck}` : ''}`;
  const locationString = `${location ? location : ''} `;
  const currentTime = new Date();
  const isActive =
    isAfter(currentTime, startTime) && isBefore(currentTime, endTime);
  const Wrapper = isActive ? Active : Container;
  return (
    <Wrapper onClick={onClick}>
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
