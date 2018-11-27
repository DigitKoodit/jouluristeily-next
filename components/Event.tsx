import * as React from 'react';
import styled from 'styled-components';
import { format, isAfter, isBefore } from 'date-fns';
import { fonts, colors } from '../styles/stylesheet';

const Container = styled.div`
  width: 100%;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 10px;
  border-radius: 4px;
  background: rgba(255, 229, 120, 0.5);
  overflow: hidden;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${colors.lightyellow};
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
}

const Event: React.SFC<Props> = props => {
  const { event } = props;
  const { title, startTime, endTime, deck, location } = event;
  const timeString = `${format(startTime, 'dd HH:mm', { locale: 'fi' })} ${
    endTime ? format(endTime, 'HH:mm', { locale: 'fi' }) : ''
  }`;
  const deckString = `${deck ? `Kansi ${deck}` : ''}`;
  const locationString = `${location ? location : ''} `;
  const currentTime = new Date();
  const isActive =
    isAfter(currentTime, startTime) && isBefore(currentTime, endTime);
  const Wrapper = isActive ? Active : Container;
  return (
    <Wrapper>
      <Label>{title}</Label>
      <Deck>{deckString}</Deck>
      <Time>
        {timeString} {locationString}
      </Time>
    </Wrapper>
  );
};

export default Event;
