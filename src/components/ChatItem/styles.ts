import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 70px;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
  }

  &:hover{
    background: var(--header);
  }
`

export const Chats = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-bottom: 1px solid var(--border);
  padding-right: 15px;
  margin-left: 15px;

  flex-wrap: wrap;
  min-width: 0;
`

export const ChatLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%
`

export const Name = styled.div`
  color: var(--primary);
  font-size: 17px;
`

export const Date = styled.div`
  color: var(--gray);
  font-size: 12px;
`

export const LastMessage = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;

  > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
    color: var(--gray);
  }
`
