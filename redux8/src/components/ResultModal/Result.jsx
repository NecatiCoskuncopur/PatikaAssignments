import React from 'react';
import styled from 'styled-components';

import { colors } from '../../theme';
import Button from '../Button';
import Text from '../Text';

const Result = ({ correct, inCorrect, ticknumb, inCorTick, corTick, isTurkish }) => {
  return (
    <ResultWrapper>
      <div> {correct + inCorrect + inCorTick}</div>
      <p>
        {isTurkish ? 'Tuş Vuruşu' : 'Keystroke'}
        <span>
          (
          <Text
            type="correct"
            value={corTick}
          />
          |
          <Text
            type="incorrect"
            value={inCorTick}
          />
          ) {ticknumb}
        </span>
      </p>
      <p>
        {isTurkish ? 'Doğruluk' : 'Accuracy'}
        <Text
          type="bold"
          value={`${(Math.round(correct * 100) / Math.round(correct + inCorrect)).toFixed(2)} %`}
        />
      </p>
      <p>
        {isTurkish ? 'Doğru Kelime' : 'Correct Words'}
        <Text
          type="correct"
          value={correct}
        />
      </p>
      <p>
        {isTurkish ? 'Yanlış Kelime' : 'Wrong  Words'}
        <Text
          type="incorrect"
          value={inCorrect}
        />
      </p>
      <div>
        <Button size={30} />
      </div>
    </ResultWrapper>
  );
};

export default Result;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: ${colors.main};
  div {
    color: ${colors.fernFrond};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 46px;
    &:last-child {
      border-top: 1px solid black;
      padding: 20px;
    }
  }
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid black;
    padding: 8px 20px;
  }
`;
