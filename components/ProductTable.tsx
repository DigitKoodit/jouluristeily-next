import * as React from 'react';
import styled from 'styled-components';
import { fonts } from '../styles/stylesheet';

const Table = styled.table`
  font-family: ${fonts.paragraph};
  width: 100%;

  & tbody > tr:nth-child(2n + 1) {
    background: #f3f3f3;
    border-radius: 2px;
  }

  & td {
    padding: 1rem;
    text-align: center;
    max-height: 60px;
    overflow: auto;
  }

  & td:nth-child(3) {
    text-align: left;
    width: 60%;
  }

  & td:nth-child(1),
  & td:nth-child(2) {
    font-weight: 600;
    width: 20%;
  }

  & th {
    padding: 1rem;
  }
`;

const Header = styled.h3`
  font-family: ${fonts.paragraph};
  display: block;
  text-align: left;
  width: 100%;
`;

export default props => {
  const { data } = props;
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <Header>{data.fields.name}</Header>
      <Table>
        <thead>
          <tr>
            <th>Nimi</th>
            <th>Hinta</th>
            <th>Kuvaus</th>
          </tr>
        </thead>
        <tbody>
          {data.fields.rows &&
            data.fields.rows.map(item => (
              <tr key={item.sys.id}>
                <td>{item.fields.name}</td>
                <td>{item.fields.price}€</td>
                <td>{item.fields.description}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};
