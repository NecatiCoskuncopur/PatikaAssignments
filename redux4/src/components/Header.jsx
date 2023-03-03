import { styled } from '../stitches.config';


export default function Header() {
  return (
    <Container>
      <Title>React sample text generator app</Title>
    </Container>
  )
}


const Container = styled('section', {
  borderBottom: '1px solid $main',
  fontFamily: '$heading',
  my: '$3'
});


const Title = styled('h1', {
  my: '$4',
  textAlign: 'center',
  fontSize: '$6',
  color: '$main',
  fontWeight: '$2',
})