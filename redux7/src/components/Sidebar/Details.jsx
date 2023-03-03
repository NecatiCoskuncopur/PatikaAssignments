import styled from 'styled-components';
import { BsThermometerHigh, BsSunrise, BsSunset } from 'react-icons/bs';
import { WiHumidity, WiBarometer, WiStrongWind } from 'react-icons/wi';
import { device } from '../../theme';

const Details = ({ sunrise, sunset, humidity, pressure, wind_speed, feels_like }) => {
  return (
    <DetailsWrapper>
      <p>
        <BsThermometerHigh size={20} /> <span>Hissedilen {Math.round(feels_like)} °C</span>
      </p>
      <p>
        <BsSunrise size={20} /> <span>Gün Doğumu {new Date(sunrise * 1000).toLocaleTimeString('tr-TR').slice(0, 5)} </span>
      </p>
      <p>
        <BsSunset size={20} /> <span>Gün Batımı {new Date(sunset * 1000).toLocaleTimeString('tr-TR').slice(0, 5)}</span>
      </p>
      <p>
        <WiHumidity size={20} /> <span>Nem %{humidity}</span>
      </p>
      <p>
        <WiBarometer size={20} /> <span>Basınç {pressure} hPa</span>
      </p>
      <p>
        <WiStrongWind size={20} /> <span>Rüzgar Hızı {wind_speed} km/s</span>
      </p>
    </DetailsWrapper>
  );
};

export default Details;

const DetailsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  p {
    font-size: 16px;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
  @media ${device.tablet} {
    gap: 12px;
    p {
      font-size: 14px;
    }
  }
`;
