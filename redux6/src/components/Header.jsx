import { styled } from '../stitches.config'


export default function Header() {
  return (
    <Container>
      <img
        src="https://world19covid.web.app/static/media/image.d7265326.png"
        alt="covid-19"
      />
      <h3>Global and Country Wise Cases of Corona Virus</h3>
      <i>(For a Particular country, select a Country from below)</i>
    </Container>
  )
}


const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  mt: '$7',
  h3: {
    fontSize: '$3'
  },
  img: {
    width: '90%',
  }
})