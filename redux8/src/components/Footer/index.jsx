import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { colors, device } from '../../theme';
import { downTime, increWordIndex, HandleWords } from '../../redux/WordSlice';
import Timer from './Timer';
import Button from '../Button';

const Footer = () => {
  const timer = useSelector((state) => state.words.timer);
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (timer < 2) setStart(false);
    if (start) {
      setTimeout(() => dispatch(downTime()), 1000);
    }
  }, [start, timer, dispatch]);
  function increIndex(e) {
    if (e.target.value[e.target.value.length - 1] === ' ') {
      dispatch(increWordIndex());
      e.target.value = '';
    }
  }

  function Handlekeyboard(e) {
    dispatch(HandleWords(e.target.value));
    setStart(true);
  }

  return (
    <Wrapper>
      <input
        type="text"
        onKeyUpCapture={(e) => increIndex(e)}
        disabled={timer < 1 && !start}
        onChange={(e) => Handlekeyboard(e)}
      />
      <Timer />
      <Button size={30} />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${colors.bg.regenStBlue};
  min-height: 60px;
  input {
    height: 50px;
    width: 40%;
    border: 1px solid ${colors.border.lynch};
    font-size: 32px;
    padding: 10px;
    @media ${device.tablet} {
      font-size: 16px;
      height: 36px;
    }
  }
`;
