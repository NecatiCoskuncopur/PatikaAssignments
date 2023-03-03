import { BiRefresh } from 'react-icons/bi';
import styled from 'styled-components';

import { colors, device } from '../theme';

const Button = ({ size = 30 }) => {
  return (
    <IconWrapper onClick={() => window.location.reload()}>
      <BiRefresh size={size} />
    </IconWrapper>
  );
};

export default Button;

const IconWrapper = styled.button`
  background-color: ${colors.bg.bostonBlue};
  border: 1px solid ${colors.border.bostonBlue};
  width: 52px;
  height: 50px;
  color: ${colors.main};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    height: 36px;
  }
`;
