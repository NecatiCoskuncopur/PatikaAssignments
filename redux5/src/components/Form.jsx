import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeText } from '../redux/textSlice';
import { styled } from '../stitches.config';

export default function Form() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);
  const [input, setInput] = useState(text.content);

  useEffect(() => {
    dispatch(changeText(input))
  }, [input, dispatch]);



  return (
    <>
      {text.toggle ? (

        <Area value={text.textHelp} />

      ) : (

        <Area value={input} onChange={(e) => setInput(e.target.value)} />
      )}
    </>
  )
}






const Area = styled('textarea', {
  resize: 'none',
  overflowX: 'hidden',
  color: '$textColor',
  width: '45%',
  height: '100%',
  boxShadow: '$btnShadow',
  p: '$2',
  background: '$bgPrimary',
  '@bp3': {
    fontSize: '$1',
  },
  '@bp4': {
    width: '50%',
    boxShadow: 'none',
    borderRight: '3px solid #FFCD38'
  }
})