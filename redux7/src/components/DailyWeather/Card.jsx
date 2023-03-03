import styled from 'styled-components';

import { colors } from '../../theme';

const Card = ({ item }) => {
  return (
    <Container>
      <h4>{new Date(item.dt * 1000).toLocaleString('tr-tr', { weekday: 'long' })}</h4>
      <ImageWrapper>
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt="resim"
        />
      </ImageWrapper>
      <div>
        <span title="Max"> {Math.round(item.temp.max)} </span>
        <span title="Min">- {Math.round(item.temp.min)} °C</span>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.article`
  background-color: ${colors.main};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  max-height: 200px;
  position: relative;
  div {
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  object-fit: contain;
  justify-content: center;
  img {
    width: 80px;
    height: 80px;
  }
`;
