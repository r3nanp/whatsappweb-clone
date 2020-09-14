/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { Container, LinkContainer, Line, LaptopIcon } from './styles'
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
        <Line />
        <div>
          <LaptopIcon />
          <h1>
            WhatsApp is available for Windows and Mac. {''}
            <a href="#">Get it here.</a>
          </h1>
        </div>
      </LinkContainer>
    </Container>
  )
}

export default RightSide
