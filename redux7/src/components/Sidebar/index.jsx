import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

import { colors, device } from '../../theme';
import Search from '../Search';
import Details from './Details';
import TopWrapper from './TopWrapper';

const SideBar = () => {
  const weatherDataStatus = useSelector((state) => state.weatherapp.weatherDataStatus);
  const weatherCurrentData = useSelector((state) => state.weatherapp.weatherCurrentData);
  const weatherCurrentCity = useSelector((state) => state.weatherapp.weatherCurrentCity);
  const getCityName = useSelector((state) => state.weatherapp.getCityName);
  const locationActive = useSelector((state) => state.weatherapp.locationActive);

  const [hasError, setHasError] = useState(false);

  const handleError = (e) => {
    e.target.style.display = 'none';
    setHasError(true);
  };

  const weather = weatherDataStatus === 'succeeded' && weatherCurrentData.weather[0].main.toLowerCase();
  const weatherImage = `/images/${weather}.jpg`;

  const { sunrise, sunset, temp, humidity, pressure, wind_speed, feels_like } = weatherCurrentData;

  return (
    <>
      {weatherDataStatus === 'succeeded' && (
        <Container hasError={hasError}>
          <Bg
            src={weatherImage}
            onError={handleError}
          />
          <Search />
          <TopWrapper
            temp={temp}
            locationActive={locationActive}
            getCityName={getCityName}
            weatherCurrentCity={weatherCurrentCity}
            weatherCurrentData={weatherCurrentData}
          />
          <Details
            sunrise={sunrise}
            sunset={sunset}
            humidity={humidity}
            pressure={pressure}
            wind_speed={wind_speed}
            feels_like={feels_like}
          />
        </Container>
      )}
    </>
  );
};

export default SideBar;

const Container = styled.section`
  background-color: 'transparent';
  ${(p) =>
    p.hasError &&
    css`
      background-color: ${colors.main};
    `}
  width: 25%;
  height: 100vh;
  padding: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 64px;
  position: relative;
  filter: drop-shadow(16px 30px 24px #b2beb5);
  @media ${device.tablet} {
    width: 100%;
  }
`;

const Bg = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.3;
  overflow: hidden;
  z-index: -1;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
