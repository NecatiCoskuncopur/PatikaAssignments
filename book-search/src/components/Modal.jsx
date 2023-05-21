import { styled } from 'styled-components';
import { colors, device } from '../theme';

const Modal = ({ handleClose, title, description, publishDate, publisher, pageCount }) => {
  return (
    <Wrapper onClick={handleClose}>
      <InnerModal onClick={(e) => e.stopPropagation()}>
        <h1>{title}</h1>
        <p title={description}>{description}</p>
        <span>Publish Date: {publishDate}</span>
        <span>Publisher: {publisher}</span>
        <span>Page: {pageCount}</span>
      </InnerModal>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerModal = styled.div`
  background-color: ${colors.main};
  width: 30%;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  h1 {
    text-align: center;
    font-size: 24px;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  span {
    font-weight: 600;
  }
  @media ${device.phone} {
    width: 80%;
    padding: 10px;
    h1 {
      font-size: 18px;
    }
  }
`;
