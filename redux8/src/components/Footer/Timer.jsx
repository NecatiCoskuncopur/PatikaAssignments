import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { colors, device } from '../../theme';

const Timer = () => {
  const time = useSelector((state) => state.words.time);
  return <Wrapper>{time}</Wrapper>;
};

export default Timer;

const Wrapper = styled.span`
  background-color: ${colors.bg.oxfordBlue};
  width: 70px;
  height: 50px;
  font-size: 22px;
  color: ${colors.main};
  padding: 10px 0 3px;
  text-align: center;
  border-radius: 3px;
  @media ${device.tablet} {
    font-size: 16px;
    height: 36px;
  }
`;
