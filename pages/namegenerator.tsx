import * as React from 'react';
import propLoader from '../core/propLoader';
import styled from 'styled-components';
import { fonts, shadows, colors } from '../styles/stylesheet';

interface State {
    name: string;
    current: string;
}

const TextField = styled.input`
  width: 100%;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 10px;
  border-radius: 4px;
  background: rgba(255, 229, 120, 0.5);
  outline: none;
  box-shadow: none;
  border: none;
  max-width: 100%;
  font-family: ${fonts.paragraph};
`;

const Button = styled.button`
  box-shadow: ${shadows.low};
  background: ${colors.lightred};
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  align-self: flex-end;
  font-family: ${fonts.secondary};
  &:hover {
    cursor: pointer;
    background: ${colors.red};
  }
`;

const Title = styled.h1`
  text-align: left;
  color: ${colors.red};
  width: 100%;
  font-family: ${fonts.title};
`;


const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;


class Notepad extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = { name: '', current: '' };
    }

    generateName = (ev) => {
        ev.preventDefault();
        this.setState({name: 'test'});
    };

    onChange = (ev: React.ChangeEvent<any>) => {
        ev.preventDefault();
        const { value } = ev.target;
        if (value.length >= 160) {
            return;
        }
        this.setState({ current: value });
    };


    render() {
        return (
            <Container>
                <Title>Risteilynimigeneraattori</Title>
                <TextField
                    value={this.state.current}
                    onChange={ev => this.onChange(ev)}
                />
                <Button onClick={ev => this.generateName(ev)}>Generoi</Button>
                <Title>{this.state.name}</Title>
            </Container>
        );
    }
}

export default propLoader(Notepad, () => Promise.resolve({}));
