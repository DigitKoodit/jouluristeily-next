import styled from 'styled-components';
import { colors, shadows } from '../../styles/stylesheet';

const Line = styled.span`
  height: 5px;
  width: 100%;
  margin: 3px 0px;
  background-color ${colors.yellow};
  border-radius: 2px;
  box-shadow: ${shadows.low};
  transition: all .1s ease-in-out;
`;

const Box = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  justify-content: center;
  padding: 0px 4px;
  &:hover > * {
    background-color: ${colors.red};
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