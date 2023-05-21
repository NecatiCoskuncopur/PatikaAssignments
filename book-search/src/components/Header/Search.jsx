import { styled } from 'styled-components';
import { MdSearch } from 'react-icons/md';

import { colors } from '../../theme';
const Search = ({ handleSearch, setSearch, search }) => {
  return (
    <Form
      className="search-box"
      onSubmit={handleSearch}
    >
      <input
        type="search"
        placeholder="Book Title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>
        <MdSearch size={20} />
      </button>
    </Form>
  );
};

export default Search;

const Form = styled.form`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  input {
    height: 34px;
    padding: 6px 12px;
    border-radius: 4px;
    min-width: 200px;
    border: 1px solid ${colors.silver};
  }
  button {
    height: 34px;
    padding: 6px 12px;
    border-radius: 4px;
    transition: 0.3s;
    border: 1px solid ${colors.silver};
    cursor: pointer;
    background-color: ${colors.main};
    &:hover {
      background-color: ${colors.silver};
    }
  }
`;
