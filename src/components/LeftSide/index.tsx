import React from 'react'

import { Container, Header, SearchIcon, ChatList } from './styles'

const LeftSide: React.FC = () => {
  return (
    <Container>
      <Header>
        <SearchIcon />
        <input placeholder="Search or start new chat" />
      </Header>

      <ChatList />
    </Container>
  )
}

export default LeftSide
