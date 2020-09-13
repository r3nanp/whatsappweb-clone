import styled from 'styled-components'

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
  margin-top: 32px;
  > p {

    > a {
      color: green;
      text-decoration: none;
    }
  }
`
