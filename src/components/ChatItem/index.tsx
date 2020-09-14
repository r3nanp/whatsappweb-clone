import React from 'react'

import { Container, Chats, ChatLine, Name, Date, LastMessage } from './styles'
import profileImage from '../../assets/profileimage.png'

const ChatItem: React.FC = () => {
  return (
    <Container>
      <img src={profileImage} alt="Icon" />

      <Chats>
        <ChatLine>
          <Name>Renan Pereira</Name>
          <Date>19:00</Date>
        </ChatLine>

        <LastMessage>
          <p>Oi, tá on?</p>
        </LastMessage>
      </Chats>
    </Container>
  )
}

export default ChatItem
