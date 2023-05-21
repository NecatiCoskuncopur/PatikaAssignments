import { styled } from 'styled-components';
import { colors } from '../../theme';

const Link = ({ preview, handleOpen }) => {
  return (
    <Wrapper>
      <a
        href={preview}
        target="_blank"
        rel="noreferrer nopener"
      >
        PREVIEW
      </a>
      <span>|</span>
      <button onClick={handleOpen}>DETAILS</button>
    </Wrapper>
  );
};

export default Link;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  margin-top: 12px;

  a,
  button {
    padding: 0 8px;
    color: ${colors.nevada};
    background-color: transparent;
    font-size: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: ${colors.dark};
      text-decoration: underline;
    }
  }
`;
