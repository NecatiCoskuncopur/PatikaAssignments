import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { countriesSelector, fetchCountries, fetchCountry, fetchGlobal, changeCountry } from '../redux/covidSlice';
import { styled } from '../stitches.config';


export default function Form() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const dispatch = useDispatch();
  const countries = useSelector(countriesSelector);

  useEffect(() => {
    dispatch(fetchGlobal());
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleChange = (e) => {
    let value = e.target.value;
    let name = countries?.find((country) => country.iso2 === value).name;
    setSelectedCountry(value);
    dispatch(changeCountry(name));
    dispatch(fetchCountry(value));
  };

  return (
    <Container>
      <form>

        <select value={selectedCountry} onChange={handleChange} >
          <option value='' disabled selected>Choose Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.iso2}>
              {country.name}
            </option>
          ))}
        </select>
      </form>
    </Container>
  )
}


const Container = styled('section', {
  mb: '$6',
  width: '100%',
  select: {
    border: '1px solid $color2',
    width: '20%',
    pa: '$3',
    mx: 'auto',
    display: 'block',
    borderRadius: '$1',
    '@bp3': {
      width: '40%'
    },
    '@bp4': {
      width: '60%'
    },
    '@bp5': {
      width: '80%'
    }
  }
});