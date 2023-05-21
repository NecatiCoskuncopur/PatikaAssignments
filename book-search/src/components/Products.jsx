import { styled } from 'styled-components';
import Product from './Product';

const Products = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item) => (
        <Product
          key={item.id}
          title={item.volumeInfo.title}
          author={item.volumeInfo.authors && item.volumeInfo.authors[0]}
          preview={item.volumeInfo.previewLink}
          image={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail}
          item={item}
        />
      ))}
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.section`
  width: 80%;
  margin: 40px auto 60px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 45px;
`;
