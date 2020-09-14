import styled from 'styled-components'
import { MdLaptopMac } from 'react-icons/md'

export const Container = styled.div`
  flex: 1;
  background: var(--header);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  border-bottom: 6px solid var(--active-tab-marker);

  > img {
    width: 250px;
    height: auto;
  }

  > h1 {
    margin-top: 28px;
    font-size: 32px;
    font-weight: normal;
  }

  > h2 {
    margin-top: 28px;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
  }
`

export const LinkContainer = styled.div`
  > div {
    display: flex;
    > h1 {
      font-size: 14px;
      font-weight: normal;
      > a {
        color: green;
        text-decoration: none;
      }
    }
  }
`

export const Line = styled.div`
  margin-bottom: 32px;
  margin-top: 32px;
  border-top: 1px solid var(--border-color);
`

export const LaptopIcon = styled(MdLaptopMac)`
  fill: rgba(241, 241, 242, 0.88);
  width: 21px;
  height: 18px;
  margin-right: 10px;
`
