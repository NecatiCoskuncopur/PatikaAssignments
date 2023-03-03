import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';

import { changeLocation } from '../redux/weather/weatherSlice';
import { fetchWeatherData, fetchGetCity } from '../redux/weather/services';

const Search = () => {
  const [search, setSearch] = useState('');
  const [getCity, setGetCity] = useState(false);
  const getCityCoord = useSelector((state) => state.weatherapp.getCityCoord);
  const weatherGetCityStatus = useSelector((state) => state.weatherapp.weatherGetCityStatus);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchGetCity(search));
    setGetCity(true);
    dispatch(changeLocation(false));
  };

  useEffect(() => {
    if (weatherGetCityStatus === 'succeeded' && getCity) {
      dispatch(fetchWeatherData(getCityCoord));
      setGetCity(false);
    }
  }, [weatherGetCityStatus, getCity, dispatch, getCityCoord]);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <CiSearch size={20} />
      <Input
        placeholder="Şehir Ara"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: flex-start;
`;
const Input = styled.input`
  background-color: transparent;
  font-size: 18px;
  width: calc(100% - 20);
`;
