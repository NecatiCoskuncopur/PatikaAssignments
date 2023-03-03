import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { colors, device } from '../theme';
import { getWords } from '../redux/WordSlice';

const WordArea = () => {
  const lang = useSelector((state) => state.words.lang);
  const words = useSelector((state) => state.words.items);
  const wordindexnumber = useSelector((state) => state.words.wordindexnumber);
  const isFinish = useSelector((state) => state.words.isFinish);

  const [computedWords, setComputedWords] = useState([]);
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWords(lang));
  }, [lang]);

  useEffect(() => {
    if (wordindexnumber % 15 === 0) {
      setNum(wordindexnumber);
    }
    setComputedWords(words.slice(num, 15 + num));
  }, [words, num]);

  return (
    !isFinish && (
      <Wrapper>
        {computedWords.map((word, index) => (
          <span
            key={index}
            className={`${word.status} ${word.nowWords ? 'set' : null}`}
          >
            {word.word}
          </span>
        ))}
      </Wrapper>
    )
  );
};

export default WordArea;

const Wrapper = styled.div`
  background-color: ${colors.main};
  border: 1px solid ${colors.border.halfBaked};
  min-height: 110px;
  font-size: 30px;
  padding: 6px 12px 30px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  span {
    padding: 4px;
    &.set {
      background-color: ${colors.bg.wedgewood};
      color: ${colors.main};
    }

    &.correct {
      color: ${colors.japaneseLaurel};
    }

    &.incorrect {
      color: red;
    }
    @media ${device.tablet} {
      font-size: 20px;
    }
  }
`;
