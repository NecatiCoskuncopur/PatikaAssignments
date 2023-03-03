import styled from 'styled-components';
import { device } from '../../theme';

const TopWrapper = ({ temp, locationActive, getCityName, weatherCurrentCity, weatherCurrentData }) => {
  return (
    <Container>
      {!locationActive && <h1>{getCityName ? getCityName : 'Ankara'}</h1>}
      {locationActive && <h1>{locationActive && weatherCurrentCity}</h1>}
      <ImageWrapper>
        <img
          src={`https://openweathermap.org/img/wn/${weatherCurrentData.weather[0].icon}@2x.png`}
          alt="resim"
        />
      </ImageWrapper>
      <p>
        {Math.floor(temp)} °<span>C</span>
      </p>
      <span>{new Date().toLocaleString('tr-tr', { weekday: 'long' })}</span>
    </Container>
  );
};

export default TopWrapper;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: -32px;

  p {
    font-size: 72px;
    font-weight: 200;
    position: relative;
    span {
      font-size: 40px;
      position: absolute;
      top: 5px;
    }
  }
  span {
    font-size: 20px;
    opacity: 0.7;
  }
  h1 {
    font-size: 36px;
  }
  @media ${device.laptop} {
    gap: 16px;
    p {
      font-size: 56px;
      span {
        font-size: 24px;
      }
    }
    h1 {
      font-size: 24px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  object-fit: contain;

  img {
    width: 150px;
    height: 150px;
  }
  @media ${device.tablet} {
    width: 120px;
    height: 120px;
    img {
      width: 120px;
      height: 120px;
    }
  }
`;
