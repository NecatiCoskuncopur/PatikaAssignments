import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Link from './Link';
import Info from './Info';
import Modal from '../Modal';
import { device } from '../../theme';

const Product = ({ item, title, author, preview, image }) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = 'scroll');
    }
  });

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Wrapper>
      <img
        src={item.volumeInfo.imageLinks ? image : '../img/notFound.jpg'}
        alt="resim"
      />

      <Link
        preview={preview}
        handleOpen={handleOpen}
      />
      <Info
        title={title}
        author={author}
      />
      {openModal && (
        <Modal
          handleClose={handleClose}
          title={title}
          description={item.volumeInfo.description}
          publishDate={item.volumeInfo.publishedDate}
          publisher={item.volumeInfo.publisher}
          pageCount={item.volumeInfo.pageCount}
        />
      )}
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.article`
  flex-basis: 33.333333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 180px;
    height: 260px;
    object-fit: cover;
  }
  @media ${device.laptop} {
    flex-basis: 50%;
  }
  @media ${device.phone} {
    flex-basis: 100%;
  }
`;
