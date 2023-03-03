import { styled } from './stitches.config';

import {
  Header,
  Container,
  Footer,
} from './components'


export default function App() {
  return (
    <Main>
      <Header />
      <Container />
      <Footer />
    </Main>
  )
}


const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
})