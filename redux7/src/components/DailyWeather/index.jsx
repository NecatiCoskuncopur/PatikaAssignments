import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { device } from '../../theme';
import Card from './Card';

const DailyWeather = () => {
  const weatherDailyData = useSelector((state) => state.weatherapp.weatherDailyData);
  const weatherDataStatus = useSelector((state) => state.weatherapp.weatherDataStatus);

  return (
    <>
      {weatherDataStatus === 'succeeded' && (
        <CardWrapper>
          {weatherDailyData.slice(1, 7).map((item, idx) => (
            <Card
              key={idx}
              item={item}
            />
          ))}
        </CardWrapper>
      )}
    </>
  );
};

export default DailyWeather;

const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  flex: 1;
  padding: 40px 20px 40px 0;
  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px;
  }
`;
