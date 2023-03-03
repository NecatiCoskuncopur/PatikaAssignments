import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { device } from '../theme';
import SideBar from './Sidebar';
import DailyWeather from './DailyWeather';
import { fetchWeatherData } from '../redux/weather/services';
import Loading from './Loading';

const Wrapper = () => {
  const defaultCity = { lat: 39.925533, lon: 32.866287 };
  const weatherDataStatus = useSelector((state) => state.weatherapp.weatherDataStatus);
  const isWeatherDataError = useSelector((state) => state.weatherapp.isWeatherDataError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (weatherDataStatus === 'idle') {
      dispatch(fetchWeatherData(defaultCity));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, weatherDataStatus]);

  if (weatherDataStatus === 'loading') {
    return <Loading />;
  }

  if (weatherDataStatus === 'failed') {
    return <div>{isWeatherDataError}</div>;
  }

  return (
    <ContentWrapper>
      <SideBar />
      <DailyWeather />
    </ContentWrapper>
  );
};

export default Wrapper;

const ContentWrapper = styled.section`
  display: flex;
  gap: 20px;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
