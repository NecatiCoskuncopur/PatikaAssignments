import { styled } from './stitches.config';

import {
  Header,
  CardList,
  Form,
  AreaChart
} from './components'


export default function App() {
  return (
    <Container>
      <Header />
      <CardList />
      <Form />
      <AreaChart />

    </Container>
  )
}


const Container = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})