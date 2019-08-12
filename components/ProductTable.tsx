import * as React from 'react';
import styled from 'styled-components';
import { fonts } from '../styles/stylesheet';
import { colors } from '../styles/stylesheet';

const Table = styled.table`
  font-family: ${fonts.paragraph};
  & td {
    width: 33%;
    padding: 1rem;
    text-align: center;
    border-radius: 6px;
  }
  & td:nth-child(1), & td:nth-child(3) {
    background: ${colors.lightyellow};
    font-weight: 600;
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
        <tbody>
          {data.fields.rows &&
            data.fields.rows.map(item => (
              <tr key={item.sys.id}>
                <td>{item.fields.name}</td>
                <td>{item.fields.description}</td>
                <td>{item.fields.price}€</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};
