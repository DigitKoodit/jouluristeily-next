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

interface State {
  open: number | null;
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

class Events extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { open: null };
  }
  setOpen(index: number) {
    this.setState(state => {
      if (state.open === index) {
        return { open: null };
      }
      return { open: index };
    });
  }
  render() {
    const { events } = this.props;
    const { open } = this.state;
    const sortedEvents =
      events && events.sort((a, b) => compareAsc(a.startTime, b.startTime));
    return (
      <React.Fragment>
        <EventContainer>
          {sortedEvents &&
            sortedEvents.map((event: CruiseEvent, idx: number) => (
              <Event
                onClick={() => this.setOpen(idx)}
                open={idx === open}
                index={idx}
                key={`${event.title}-${event.startTime}`}
                event={event}
              />
            ))}
        </EventContainer>
      </React.Fragment>
    );
  }
}

export default propLoader(Events, fetchProps);
