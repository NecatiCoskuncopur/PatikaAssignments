import { styled } from 'styled-components';
import Search from './Search';
import { colors } from '../../theme';

const Header = ({ handleSearch, setSearch, search }) => {
  return (
    <Wrapper>
      <Title>Book Search</Title>
      <Search
        handleSearch={handleSearch}
        setSearch={setSearch}
        search={search}
      />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: relative;
  margin: 0 auto;
  padding: 42px 14px;
  background: url(../img/bg.jpg) no-repeat center center;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${colors.main};
`;
