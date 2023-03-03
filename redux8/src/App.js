import styled from 'styled-components';

import { Footer, Language, ResultModal, WordArea } from './components';
import { device } from './theme';

function App() {
  return (
    <Container>
      <ContentWrapper>
        <Language />
        <WordArea />
        <Footer />
        <ResultModal />
      </ContentWrapper>
    </Container>
  );
}

export default App;

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentWrapper = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 40px;
  @media ${device.tablet} {
    width: 100%;
    padding: 20px;
  }
`;
