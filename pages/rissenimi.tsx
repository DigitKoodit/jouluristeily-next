import * as React from 'react';
import propLoader from '../core/propLoader';
import { fadeInTop } from '../components/Styled/Common';
import styled from 'styled-components';
import { colors, fonts, shadows } from '../styles/stylesheet';
const names = require('../static/names.json');

const { nouns, descriptives } = names;

const Title = styled.h1`
  ${fadeInTop}
  opacity: 0;
  animation: fade-in-top 0.5s ease forwards;
  text-align: left;
  color: ${colors.red};
  width: 100%;
  font-family: ${fonts.title};
`;

const Name = styled.h1`
  ${fadeInTop}
  opacity: 0;
  animation: fade-in-top 0.5s ease forwards;
  text-align: left;
  color: ${colors.black};
  width: 100%;
  font-family: ${fonts.secondary};
`;

export const NameForm = styled.form`
  animation: fade-in-left .5s ease forwards;
  animation-delay: 100ms;
  width 100%;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  box-size: border-box;
`;

export const TextField = styled.input`
  padding: 1rem;
  position: relative;
  margin-right: 1rem;
  border-radius: 4px;
  background: #f3f3f3;
  outline: none;
  box-shadow: none;
  border: none;
  font-family: ${fonts.paragraph};
  font-weight: 600;
  font-size: 0.9rem;
  flex: 1;
  min-width: 0px;
`;

const Button = styled.button`
  box-shadow: ${shadows.low};
  background: ${colors.lightred};
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  font-family: ${fonts.secondary};
  &:hover {
    cursor: pointer;
    background: ${colors.red};
  }
`;

const initialState = {
  firstName: '',
  cruiseName: ''
};

function generatePrefix() {
  const desc = descriptives[Math.floor(Math.random() * descriptives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${desc} ${noun}`;
}

const NameGenerator: React.SFC<any> = () => {
  const [state, setState] = React.useState(initialState);

  const generateName = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();

    const { firstName } = state;
    const prefix = generatePrefix();
    setState({ ...state, cruiseName: `${prefix}-${firstName}` });
  };

  const changeEvent = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    return setState({
      ...state,
      firstName: ev.target.value
    });
  };

  return (
    <React.Fragment>
      <Title>Nimigeneraattori</Title>
      <p style={{ textAlign: 'left', display: 'block', width: '100%' }}>
        Jokainen vakavasti otettava risteily tarvitsee nimigeneraattorin
      </p>
      <NameForm onSubmit={generateName}>
        <TextField
          placeholder="Etunimesi"
          id="firstName"
          type="text"
          onChange={changeEvent}
        />
        <Button disabled={state.firstName === ''} onClick={generateName}>
          Luo risteilynimi
        </Button>
        <Name>{state.cruiseName}</Name>
      </NameForm>
    </React.Fragment>
  );
};

export default propLoader(NameGenerator, () => Promise.resolve({}));
