import React from 'react'

import { Container, LinkContainer } from './styles'
import whatsappIntro from '../../assets/whatsappIntro.jpg'

const RightSide: React.FC = () => {
  return (
    <Container>
      <img src={whatsappIntro} alt="Whatsapp" />
      <h1>Keep your phone connected</h1>
      <h2>
        WhatsApp connects to your phone to sync messages. To reduce data usage,
        connect your phone to Wi-Fi.
      </h2>

      <LinkContainer>
        <p>WhatsApp is available for Windows. {''}
          <a href="#">Get it here.</a>
        </p>
      </LinkContainer>
    </Container>
  )
}

export default RightSide
