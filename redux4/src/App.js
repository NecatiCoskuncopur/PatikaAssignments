import { styled } from './stitches.config';

import {
Header,
Form,
Content,
Footer
}
  from './components'

export default function App() {
  return (

    <Container>
      <Header />
      <Form />
      <Content />
      <Footer />
    </Container>


  )
}


const Container = styled('main', {
  maxWidth: '1140px',
  mx: 'auto',
  px: '$3',
  width: '100%',
  '@bp5': {
    px: 0,
  }
})