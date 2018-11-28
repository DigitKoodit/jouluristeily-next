import styled from 'styled-components';
import { colors } from '../../styles/stylesheet';

const Line = styled.span`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 17px;
  height: 5px;
  width: 100%;
  margin-bottom: 6px;
  background-color ${colors.yellow};
  border-radius: 2px;
  transition: all .1s ease-in-out;
  transform: rotate(135deg);
  &:first-child{
    transform: rotate(45deg);
  }
`;

const BoxContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const Box = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  justify-content: flex-start;
  padding: 4px 4px;
  &:hover {
    & > * {
      background-color: ${colors.red};
    }
  }
`;

interface Props {
  onClick: (x: any) => void;
}

const MenuIcon = (props: Props) => (
  <BoxContainer>
    <Box role="button" onClick={props.onClick}>
      <Line />
      <Line />
    </Box>
  </BoxContainer>
);

export default MenuIcon;
