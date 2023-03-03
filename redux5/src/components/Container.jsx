import React from 'react'
import { styled } from '../stitches.config'
import Form from './Form'
import Preview from './Preview'

export default function Container() {
  return (
    <Wrapper>
      <Form />
      <Preview />
    </Wrapper>
  )
}


const Wrapper = styled('section', {
  display: 'flex',
  justifyContent: 'space-around',
  width: '80%',
  my: 0,
  mx: '10%',
  height: '600px',
  '@bp3': {
    width: '90%',
    my: 0,
    mx: '5%'
  },
  '@bp4': {
    flexGrow: 2,
    width: '100%',
    m: 0,
  }
})