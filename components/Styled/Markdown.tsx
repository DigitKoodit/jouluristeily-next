import * as React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import { fonts, colors } from '../../styles/stylesheet';

const Markdown = styled.div`
  padding: 10px;
  overflow: scroll;
  & > h1 {
    font-family: ${fonts.title};
    color: ${colors.red};
  }

  & > p {
    font-family: ${fonts.paragraph};
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
