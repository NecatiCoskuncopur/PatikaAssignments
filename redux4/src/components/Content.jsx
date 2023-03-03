import { useSelector } from 'react-redux';
import { styled } from '../stitches.config';

export default function Content() {
  const items = useSelector((state) => state.text.contents);
  return (
    <Container>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

    </Container>
  )
}



const Container = styled('section', {
  my: '$4',
  color: '$main',
  background: '$bgPrimary',
  py: '$5',
  px: '$4',
  borderRadius: '$1'
})