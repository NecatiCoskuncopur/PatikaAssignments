import { styled } from "../stitches.config"


export default function Footer() {
  return (
    <Container>
      <div>2022, created by <a target="blank" href='https://github.com/NecatiCoskuncopur'>Necati Coskuncopur</a></div>
    </Container>
  )
}

const Container = styled('footer', {
  textAlign: 'center',
  fontSize: '$1',
  lineHeight: '30px',
  mt: '$3',
  a: {
    textDecoration: 'none',
    color: '$textColor'
  }
});


