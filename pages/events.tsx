import * as React from 'react';
import { createApi } from '../core/api';
import { ContentType } from 'contentful';
import propLoader from '../core/propLoader';
import Event from '../components/Event';
import { compareAsc, isWithinRange, isAfter } from 'date-fns';
import styled from 'styled-components';
import { fonts, colors } from '../styles/stylesheet';
import { PlaceHolder, fadeInTop } from '../components/Styled/Common';

const EventContainer = styled.div`
  padding: 10px;
  max-height: 420px;
  overflow: scroll;
  width: 100%;
`;

const FilterContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FilterButton = styled.button`
  ${fadeInTop}
  animation: fade-in-top .5s ease forwards;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  font-family: ${fonts.secondary};
  padding: 0px 20px;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: ${colors.red};
    cursor: pointer;
  }
  ${(args: any) => args.prop && activeButtonStyle};
`;

const activeButtonStyle = `
  transform: scale(1.4);
  color: ${colors.red};
`;

type FilterOption = 'UPCOMING' | 'ONGOING' | 'ALL';

interface Props {
  page?: any;
  events: CruiseEvent[];
}

interface State {
  open: number | null;
  filter: FilterOption;
}

class Events extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { open: null, filter: 'ONGOING' };
  }
  setOpen(index: number) {
    this.setState((state): State => {
      if (state.open === index) {
        return { ...state, open: null };
      }
      return { ...state, open: index };
    });
  }

  changeFilter(filter: FilterOption) {
    this.setState({open: null, filter });
  }

  renderOngoing(events: CruiseEvent[]) {
    const { open } = this.state;
    const filteredEvents = events.filter((event: CruiseEvent) => isWithinRange(Date.now(), event.startTime, event.endTime));
    if (!filteredEvents.length) {
      return <PlaceHolder>Tyhjän ohjelman syndroomaan suosittelemme vieraisiin tutustumista. Tai mee vaikka bisselle.</PlaceHolder>;
    }
    return (
      <React.Fragment>
        {filteredEvents.map((event, idx) => <Event index={idx} open={idx===open} key={`${event.title}-${event.startTime}`} event={event} />)}
      </React.Fragment>
    );
  }

  renderUpcoming(events: CruiseEvent[]) {
    const { open } = this.state;
    const filteredEvents = events.filter((event: CruiseEvent) => isAfter(event.endTime, Date.now()));
    if (!filteredEvents.length) {
      return <PlaceHolder>Tyhjään ohjelmaan suosittelemme vieraisiin tutustumista. Tai mee vaikka bisselle.</PlaceHolder>;
    }
    return (
      <React.Fragment>
        {filteredEvents.map((event, idx) => <Event index={idx} open={idx===open} key={`${event.title}-${event.startTime}`} event={event} />)}
      </React.Fragment>
    );
  }

  renderAll(events: CruiseEvent[]) {
    const { open } = this.state;
    return (
      <React.Fragment>
        {events &&
            events.map((event: CruiseEvent, idx: number) => (
              <Event
                onClick={() => this.setOpen(idx)}
                open={idx === open}
                index={idx}
                key={`${event.title}-${event.startTime}`}
                event={event}
              />
            ))} 
      </React.Fragment>
    );
  }

  render() {
    const { events } = this.props;
    const { filter } = this.state;
    const sortedEvents =
      events && events.sort((a, b) => compareAsc(a.startTime, b.startTime));
    return (
      <React.Fragment>
        <FilterContainer>
          <FilterButton prop={filter==='ONGOING'} onClick={() => this.changeFilter('ONGOING')}>Nyt</FilterButton>
          <FilterButton prop={filter==='UPCOMING'} onClick={() => this.changeFilter('UPCOMING')}>Tulossa</FilterButton>
          <FilterButton prop={filter==='ALL'} onClick={() => this.changeFilter('ALL')}>Kaikki</FilterButton>
        </FilterContainer>
        <EventContainer>
          {filter === 'ONGOING' && this.renderOngoing(sortedEvents)}
          {filter === 'UPCOMING' && this.renderUpcoming(sortedEvents)}
          {filter === 'ALL' && this.renderAll(sortedEvents)}
        </EventContainer>
      </React.Fragment>
    );
  }
}

const fetchProps = async () =>
  createApi()
    .fetchEventData('event')
    .then((data: any[]) => ({
      events: data.map((item: ContentType) => ({
        ...item.fields,
        id: item.sys.id
      }))
    }));

export default propLoader(Events, fetchProps);
