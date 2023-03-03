import { PuffLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <PuffLoader color="gray" />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
`;
