import * as React from 'react';
import propLoader from '../core/propLoader';
import styled from 'styled-components';
import { fonts, shadows, colors } from '../styles/stylesheet';
import { compareAsc, format } from 'date-fns';

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
  color: ${colors.red};
  width: 100%;
  font-family: ${fonts.title};
`;

const SubTitle = styled.h2`
  color: ${colors.black};
  text-align: left;
  width: 100%;
  font-size: 1.2rem;
  font-family: ${fonts.title};
`;

const Note = styled.div`
  width: 100%;
  text-align: left;
  position: relative;
  margin-bottom: 10px;
  padding: 10px 0px;
  border-radius: 4px;
  background: rgba(255, 229, 120, 0.2);
  overflow: hidden;

  & > p {
    margin: 0;
    padding: 10px;
    font-family: ${fonts.secondary};
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Time = styled.span`
  font-size: 0.8rem;
  position: absolute;
  font-weight: 600;
  top: 10px;
  right: 10px;
`;

const NoteList = styled.div`
  max-height: 60vh;
  width: 100%;
  overflow: auto;
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
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  };

  saveNote = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    if (this.state.current.length === 0) {
      return;
    }
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
    if (value.length >= 160) {
      return;
    }
    this.setState({ current: value });
  };

  renderNotes() {
    const { notes } = this.state;
    return (
      <NoteList>
        {notes
          .sort((a, b) => compareAsc(b.timeStamp, a.timeStamp))
          .map(note => (
            <Note>
              <p>{note.content}</p>
              <Time>{format(note.timeStamp, 'hh:mm, DD.MM.YYYY')}</Time>
            </Note>
          ))}
      </NoteList>
    );
  }

  render() {
    return (
      <Container>
        <Title>Hyttimuistio</Title>
        <TextField
          value={this.state.current}
          onChange={ev => this.onChange(ev)}
        />
        <Button onClick={ev => this.saveNote(ev)}>Tallenna</Button>
        <SubTitle>Aikaisemmat muistiinpanot</SubTitle>
        {this.renderNotes()}
      </Container>
    );
  }
}

export default propLoader(Notepad, () => Promise.resolve({}));
