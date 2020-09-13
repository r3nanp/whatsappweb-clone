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
  border-right: 1px solid var(--border);
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
  }
`

export const SearchTab = styled.div`
  width: 100%;
  > input {
    background: var(--search-background);
    outline: 0;
    border-radius: 15px;
    padding-right: 32px;
    padding-left: 65px;
  }
`

export const ChatList = styled.div``

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
  ${iconCSS}
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
