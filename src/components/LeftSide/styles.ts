import styled, { css } from 'styled-components'

import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdDonutLarge } from 'react-icons/md'
import { MdChat } from 'react-icons/md'

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
`
export const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background: var(--header);

  > img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }

  > div {
    display: flex;

    .online {
      width: 7px;
      height: 7px;
      border-radius: 3.5px;
      background: green;
      position: relative;
      z-index: 100;
      top: 9px;
      right: 17px;
    }
  }
`

export const SearchTab = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--header);
  padding: 5px 15px;

  > div {
    display: flex;
    align-items: center;
    background: var(--chat-list);
    border-radius: 20px;
    height: 40px;
    padding: 0 10px;

    > input {
      flex: 1;
      border: none;
      color: var(--primary);
      outline: 0;
      background-color: transparent;
      margin-left: 10px;
    }
  }
`

export const ChatList = styled.div`
  flex: 1;
  background: var(--chat-list);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll);
  }
`

const iconCSS = css`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  flex-shrink: 0;
  padding: 8px;
  cursor: pointer;
  fill: var(--button-color);
`

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: medium;
  color: var(--button-color);
`
export const StatusIcon = styled(MdDonutLarge)`
  ${iconCSS}
`

export const ChatIcon = styled(MdChat)`
  ${iconCSS}
`

export const DotsIcon = styled(BsThreeDotsVertical)`
  ${iconCSS}
`
