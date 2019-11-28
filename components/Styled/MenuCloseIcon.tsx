import styled from 'styled-components';
import { colors, shadows } from '../../styles/stylesheet';

const Line = styled.span`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 17px;
  height: 6px;
  width: 100%;
  margin-bottom: 6px;
  background-color ${colors.red};
  transition: all .1s ease-in-out;
  transform: rotate(135deg);
  box-shadow: ${shadows.low};
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
      background-color: ${colors.black};
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
