import { fonts } from '../../styles/stylesheet';
import styled from 'styled-components';

export const Html = styled.html`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  font-family: ${fonts.paragraph};
`;

export const Body = styled.body`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  & * {
    box-sizing: border-box;
  }

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const Page = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
