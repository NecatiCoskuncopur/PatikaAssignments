import { MdSearch } from 'react-icons/md';
import { styled } from 'styled-components';
import { colors } from '../theme';

const Icon = ({ height }) => {
  return (
    <IconWrapper height={height}>
      <MdSearch size={200} />
    </IconWrapper>
  );
};

export default Icon;

const IconWrapper = styled.div`
  height: ${({ height }) => height && `calc(100vh - ${height}px)`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.silver2};
`;
