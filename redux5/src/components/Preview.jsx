import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux';
import { styled } from '../stitches.config';

export default function Preview() {

  const data = useSelector((state) => state.text);

  return (
    <>
      {data.toggle ? (
        <Text>
          <ReactMarkdown>{data.textHelp}</ReactMarkdown>
        </Text>
      ) : (
        <Text>
          <ReactMarkdown>{data.content}</ReactMarkdown>
        </Text>
      )}
    </>
  )
}


const Text = styled('div', {
  overflowX: 'hidden',
  color: '$textColor',
  width: '45%',
  height: '100%',
  boxShadow: '$btnShadow',
  p: '$2',
  background: '$bgPrimary',
  overflow: 'auto',
  '@bp3': {
    fontSize: '$1',
  },
  '@bp4': {
    width: '50%',
    boxShadow: 'none'
  }
})