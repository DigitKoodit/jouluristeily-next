import * as React from 'react';
import { createApi } from '../core/api';
import { ContentType } from 'contentful';
import propLoader from '../core/propLoader';
import Event from '../components/Event';
import { compareAsc } from 'date-fns';
import styled from 'styled-components';

interface Props {
  page?: any;
  events: CruiseEvent[];
}

const EventContainer = styled.div`
  padding: 10px 10px;
  max-height: 60vh;
  overflow: scroll;
  width: 100%;
`;

const fetchProps = async () =>
  createApi()
    .fetchEventData('event')
    .then((data: any[]) => ({
      events: data.map((item: ContentType) => ({
        ...item.fields,
        id: item.sys.id
      }))
    }));

const Events: React.SFC<Props> = (props: Props) => {
  const { events } = props;
  const sortedEvents =
    events && events.sort((a, b) => compareAsc(a.startTime, b.startTime));
  return (
    <React.Fragment>
      <EventContainer>
        {sortedEvents &&
          sortedEvents.map(event => (
            <Event key={`${event.title}-${event.startTime}`} event={event} />
          ))}
      </EventContainer>
    </React.Fragment>
  );
};

export default propLoader(Events, fetchProps);
