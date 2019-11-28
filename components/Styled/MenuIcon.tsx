import styled from 'styled-components';
import { colors, shadows } from '../../styles/stylesheet';

const Line = styled.span`
  height: 6px;
  width: 100%;
  margin-bottom: 6px;
  background-color ${colors.red};
  box-shadow: ${shadows.tall};
  transition: all .1s ease-in-out;
`;

const Box = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  justify-content: flex-start;
  padding: 4px 4px;
  &:hover > * {
    background-color: ${colors.black};
  }
`;

interface Props {
  onClick: (x: any) => void;
}

const MenuIcon = (props: Props) => (
  <Box role="button" onClick={props.onClick}>
    <Line />
    <Line />
    <Line />
  </Box>
);

export default MenuIcon;
