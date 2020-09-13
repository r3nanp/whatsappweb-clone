/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import {
  Container,
  Header,
  SearchTab,
  SearchIcon,
  StatusIcon,
  ChatIcon,
  DotsIcon,
  ChatList,
} from './styles'

import profileImage from '../../assets/profileimage.png'

const LeftSide: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={profileImage} alt="Profile image" />
        <div className="header-buttons">
          <StatusIcon />
          <ChatIcon />
          <DotsIcon />
        </div>
      </Header>

      <SearchTab>
        <SearchIcon />
        <input placeholder="Search or start new chat" />
      </SearchTab>

      <ChatList />
    </Container>
  )
}

export default LeftSide
