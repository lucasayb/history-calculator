import React from 'react'

import { Container, BoxWrapper } from './styles'
const Box = (props: any) => {
  return (
    <Container>
      <BoxWrapper>
        { props.children }
      </BoxWrapper>
    </Container>
  )
}


export default Box

