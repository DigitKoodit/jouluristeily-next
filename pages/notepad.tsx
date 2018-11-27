import * as React from 'react';
import propLoader from '../core/propLoader';
import styled from 'styled-components';
import { fonts, shadows, colors } from '../styles/stylesheet';
import { compareAsc } from 'date-fns';

const STORAGE_KEY = 'jr_notes';

interface Note {
  content: string;
  timeStamp: string;
}

interface State {
  notes: Note[];
  current: string;
}

const TextField = styled.textarea`
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
  height: 100px;
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
  width: 100%;
  font-family: ${fonts.title}
`;

class Notepad extends React.Component<any, State> {
  localStorage: any;
  constructor(props: any) {
    super(props);
    this.state = { notes: [], current: '' };
  }

  componentDidMount() {
    const existingNotes: State = JSON.parse(localStorage.getItem(STORAGE_KEY));
    this.setState(existingNotes);
  }

  pushToStorage = (state: State) => {
    console.log(state);
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  };

  saveNote = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    this.setState(
      (state: State): State => {
        const notes = state.notes.concat([
          { content: state.current, timeStamp: new Date().toISOString() }
        ]);
        return { current: '', notes };
      },
      () => this.pushToStorage(this.state)
    );
  };

  onChange = (ev: React.ChangeEvent<any>) => {
    ev.preventDefault();
    const { value } = ev.target;
    this.setState({ current: value });
  };

  renderNotes() {
    const { notes } = this.state;
    return (
      <React.Fragment>
        {notes.sort((a, b) => compareAsc(b.timeStamp, a.timeStamp)).map(note => (
          <span>{note.content}</span>
        ))}
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Title>Hyttimuistio</Title>
        <TextField onChange={(ev) => this.onChange(ev)} />
        <Button onClick={(ev) => this.saveNote(ev)}>Tallenna</Button>
        <Title>Aikaisemmat muistiinpanot</Title>
        {this.renderNotes()}
      </React.Fragment>
    );
  }
}

export default propLoader(Notepad, () => Promise.resolve({}));
