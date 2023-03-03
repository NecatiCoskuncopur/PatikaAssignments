import { useState, useEffect, useMemo } from 'react';
import { styled } from '../stitches.config';
import { useDispatch } from 'react-redux/es/exports';

import { fetchText } from '../redux/textSlice';


export default function Form() {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(4);
  const [select, setSelect] = useState('text');

  let type = useMemo(() => {
    return { n: number, s: select };
  }, [number, select]);


  useEffect(() => {
    dispatch(fetchText(type));
  }, [dispatch, type]);

  const handleChangeNumber = (number) => {
    if (number < 1) {
      setNumber(1);
      return;
    }
    setNumber(number);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <label htmlFor='number'>Paragraphs</label>
          <input
            id='number'
            type='number'
            value={number}
            onChange={(e) => handleChangeNumber(e.target.value)}
          />
        </Wrapper>
        <Wrapper>
          <label htmlFor="select">Include HTML</label>
          <select
            id="select"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="text">No</option>
            <option value="html">Yes</option>
          </select>
        </Wrapper>
      </Container>
    </div>
  )
}


const Container = styled('section', {
  display: 'flex',
  alignItems: 'center',
  '@bp5': {
    justifyContent: 'center'
  }
})


const Wrapper = styled('div', {
  '&:not(:last-child)': {
    mr: '$4',
  },
  textAlign: 'left',
  label: {
    color: '$main',
    display: 'block',
    mb: 0,
    fontSize: '$2',
    fontWeight: '$1',
  },
  input: {
    py: '1px',
    px: '2px',
    border: '2px solid $main'
  },
  select: {
    border: '1px solid $main',
    px: '$2',
    py: '$2',
    borderRadius: '$1'
  },

})