import * as React from 'react';
import { createApi } from '../core/api';
import { ContentType } from 'contentful';
import { format } from 'date-fns';
import propLoader from '../core/propLoader';

interface Props {
  page?: any;
  events: CruiseEvent[];
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

const Events: React.SFC<Props> = (props: Props) => {
  const renderEvent = (event: CruiseEvent) => {
    const { title, startTime, endTime, location, deck, id } = event;
    return (
      <div key={id}>
        <h3>{title}</h3>
        <h4>
          {format(startTime, 'dd HH:mm', { locale: 'fi' })} -{' '}
          {format(endTime, 'dd HH:mm', { locale: 'fi' })}
        </h4>
        <h4>
          {location} - Kansi {deck}
        </h4>
      </div>
    );
  };

  const { events } = props;
  const sortedEvents =
    events && events.sort(ev => new Date(ev.startTime).getTime());
  return (
    <React.Fragment>
      {sortedEvents && sortedEvents.map(renderEvent)}
    </React.Fragment>
  );
};

export default propLoader(Events, fetchProps);
