/* eslint-disable @typescript-eslint/no-unused-expressions */
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

import ChatItem from '../ChatItem'
import profileImage from '../../assets/profileimage.png'

const LeftSide: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={profileImage} alt="Profile image" />
        <div>
          <StatusIcon />
          <div className="online"/>

          <ChatIcon />
          <DotsIcon />
        </div>
      </Header>

      <SearchTab>
        <div className="search-input">
          <SearchIcon />
          <input type="search" placeholder="Search or start new chat" />
        </div>
      </SearchTab>

      <ChatList>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </ChatList>

    </Container>
  )
}

export default LeftSide
