import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { colors } from '../../theme';
import Result from './Result';

const ResultModal = () => {
  const isFinish = useSelector((state) => state.words.isFinish);
  const correct = useSelector((state) => state.words.correct);
  const inCorrect = useSelector((state) => state.words.inCorrect);
  const ticknumb = useSelector((state) => state.words.ticknumb);
  const inCorTick = useSelector((state) => state.words.inCorTick);
  const corTick = useSelector((state) => state.words.corTick);
  const language = useSelector((state) => state.words.lang);

  const isTurkish = language === 'turkish';

  return (
    isFinish && (
      <Container>
        <Header>{isTurkish ? 'Sonuç' : 'Result'}</Header>
        <Result
          correct={correct}
          inCorrect={inCorrect}
          ticknumb={ticknumb}
          inCorTick={inCorTick}
          corTick={corTick}
          isTurkish={isTurkish}
        />
      </Container>
    )
  );
};

export default ResultModal;

const Container = styled.section`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Header = styled.header`
  background-color: ${colors.bg.wedgewood};
  color: ${colors.main};
  padding: 8px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
