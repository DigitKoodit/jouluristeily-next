import * as React from 'react';
import { createApiClient } from '../core/api';
import { ContentType } from 'contentful';
import { format } from 'date-fns';
import PageLoader from '../components/PageLoader';

interface Props {
  page?: any;
  events: CruiseEvent[];
}

const fetchProps = async () => {
  const api = createApiClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN
  });

  return api.fetchEventData('event').then((data: any[]) => ({
    events: data.map((item: ContentType) => ({
      ...item.fields,
      id: item.sys.id
    }))
  }));
};

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
  const sortedEvents = events && events.sort(ev => new Date(ev.startTime).getTime());
  return (
    <React.Fragment>
      <h1>Event page</h1>
      {sortedEvents && sortedEvents.map(renderEvent)}
    </React.Fragment>
  );
};

export default PageLoader(Events, fetchProps);

const a = [
  {
    sys: {
      space: { sys: { type: 'Link', linkType: 'Space', id: 'hh7y1mt2buzy' } },
      id: '5PyCwP8guswEYuGGEE8sOw',
      type: 'Entry',
      createdAt: '2018-11-22T18:10:16.725Z',
      updatedAt: '2018-11-22T18:10:16.725Z',
      environment: {
        sys: { id: 'master', type: 'Link', linkType: 'Environment' }
      },
      revision: 1,
      contentType: {
        sys: { type: 'Link', linkType: 'ContentType', id: 'event' }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'Trubaduuri Vesa Virtanen',
      description: 'Trubaduuri Vesa Virtanen viihdyttää Pubissa (Kansi 7)',
      startTime: '2018-11-29T20:00+02:00',
      endTime: '2018-11-29T21:45+02:00',
      location: 'Pubi',
      deck: 7
    }
  },
  {
    sys: {
      space: { sys: { type: 'Link', linkType: 'Space', id: 'hh7y1mt2buzy' } },
      id: '5THVU4vjOMaKM0uI6MQ4i4',
      type: 'Entry',
      createdAt: '2018-11-22T18:09:00.645Z',
      updatedAt: '2018-11-22T18:09:00.645Z',
      environment: {
        sys: { id: 'master', type: 'Link', linkType: 'Environment' }
      },
      revision: 1,
      contentType: {
        sys: { type: 'Link', linkType: 'ContentType', id: 'event' }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'Avajaisseremonia',
      description:
        'Tervetulotilaisuus Starlight Palacessa. Arvonnassa huikeat palkinnot (esim. hytti-päivitys suiteksi, risteilylahjakortin, kurkunkostuketta!)! Tarjolla on komiikkaa, sirkushuveja ja karismaattinen juontaja-duo vauhdittaa fiilistä. (Kansi 6 ja 7)',
      startTime: '2018-11-29T20:30+02:00',
      endTime: '2018-11-29T21:45+02:00',
      location: 'Starlight Palace',
      deck: 6
    }
  },
  {
    sys: {
      space: { sys: { type: 'Link', linkType: 'Space', id: 'hh7y1mt2buzy' } },
      id: '2N1wtR1BagOQUUq4GK0SI2',
      type: 'Entry',
      createdAt: '2018-11-10T13:29:35.764Z',
      updatedAt: '2018-11-18T16:04:03.827Z',
      environment: {
        sys: { id: 'master', type: 'Link', linkType: 'Environment' }
      },
      revision: 2,
      contentType: {
        sys: { type: 'Link', linkType: 'ContentType', id: 'page' }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'Etusivu',
      text:
        '# Tänä vuonna jouluristeily seilataan 29.11. - 30.11.2018!\n\nLuonnontieteilijöiden Jouluristeilyn juuret ulottuvat vuoteen 2003, jolloin vuosittainen risteilyperinne alkoi. Vuonna 2005 jouluristeilystä tehtiin valtakunnallinen tapahtuma ja mukaan kutsuttiin opiskelijoita ympäri Suomen. Vuonna 2006 perustettiin After lecture ry, joka otti vastuulleen luonnontieteilijöiden jouluristeilyn järjestämisen ja sen kehittämisen.\n\nVuonna 2006 jouluristeilylle osallistui 801 matkustajaa, vuonna 2007 968 matkustajaa, 2008 1491 matkustajaa, 2009 2081 matkustajaa, 2010 2491 matkustajaa, vuonna 2011 2556 iloista matkustajaa ja vuonna 2012 2716 risteilijää. Vuosien saatossa risteilyä on kutsuttu pelkäksi jouluristeilyksi, kemistien jouluristeilyksi, pikkujouluristeilyksi ja nyttemmin tapahtuman nimeksi on vakiintunut Luonnontieteilijöiden Jouluristeily, tai lyhyemmin vain Jouluristeily.\n\nVuonna 2013 varustamo järjesteli laivaliikennettä uudelleen, ja Jouluristeilyn laivaksi vaihtuikin Baltic Princess. Laivan matkustajamäärän pienentyessä liput myytiin entistä kiivaammin loppuun. Eeppiselle matkalle kuitenkin päätyi 2180 risteilijää, joilla bileet olivat huikeat!\n',
      id: 'id_home'
    }
  }
];
