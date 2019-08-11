import * as React from 'react';
import styled from 'styled-components';

const Table = styled.table``;

export default props => {
  const { data } = props;
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <h3>{data.fields.name}</h3>
      <Table>
        <tbody>
          {data.fields.rows &&
            data.fields.rows.map(item => JSON.stringify(item))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};
