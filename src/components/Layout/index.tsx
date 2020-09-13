import React from 'react'

import LeftSide from '../LeftSide'
import RightSide from '../RightSide'

import { Container } from './styles'

const Layout: React.FC = () => {
  return (
    <Container>
      <LeftSide />

      <RightSide />
    </Container>
  )
}

export default Layout
