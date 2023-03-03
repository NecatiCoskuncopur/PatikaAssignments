import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeLang } from '../redux/WordSlice';
import { colors } from '../theme';

const Language = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.words.timer);

  return (
    <Wrapper>
      <select
        defaultValue="turkish"
        onChange={(e) => dispatch(changeLang(e.target.value))}
        disabled={timer < 60}
      >
        <option value="turkish">Türkçe</option>
        <option value="english">English</option>
      </select>
    </Wrapper>
  );
};

export default Language;

const Wrapper = styled.div`
  select {
    padding: 6px 12px;
    background-color: ${colors.bg.fern};
    color: ${colors.main};
    border-radius: 4px;

    option {
      background-color: ${colors.main};
      color: black;
    }
  }
`;
