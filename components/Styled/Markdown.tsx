import * as React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import { fonts, colors } from '../../styles/stylesheet';
import { fadeInLeft } from './Common';

const Markdown = styled.div`
  ${fadeInLeft}
  padding: 10px;
  overflow-y: scroll;
  overflow-wrap: break-word;
  width: 100%;
  & > h1,
  h2,
  h3 {
    opacity: 0;
    animation: fade-in-left 0.5s ease forwards;
    font-family: ${fonts.title};
    color: ${colors.red};
  }

  & > h2,
  h3 {
    opacity: 0;
    color: ${colors.black};
    delay: 0.1s;
  }

  & > p {
    opacity: 0;
    animation: fade-in-left 0.5s ease forwards;
    font-family: ${fonts.paragraph};
    animation-delay: 0.2s;
  }

  & img {
    width: 400px;
    max-width: 100%;
    display: inherit;
    margin-left: auto;
    margin-right: auto;
  }
`;

interface Props {
  content: string;
}

export default ({ content = '### ...' }: Props) => (
  <Markdown
    dangerouslySetInnerHTML={{ __html: marked(content, { sanitize: true }) }}
  />
);
