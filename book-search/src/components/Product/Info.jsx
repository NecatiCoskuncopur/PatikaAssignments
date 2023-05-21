import { styled } from 'styled-components';

const Info = ({ title, author }) => {
  return (
    <Wrapper>
      <Line />
      <span>{title}</span>
      <Line />
      <span>{author ? author : ''}</span>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

const Line = styled.div`
  height: 1px;
  width: 20%;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: -10px;
`;
