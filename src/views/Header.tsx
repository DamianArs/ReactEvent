import React from 'react'

import styles from 'styled-components'

const Wrapper = styles.div`
  height: 10vh;
  background-color: blue;
  color: white;
  text-align: center;
    h1{
      line-height: 10vh;
      font-size: 42px;
    }
`

export const Header:React.FC = () => {
  return(
  <Wrapper>
    <h1>Events</h1>
  </Wrapper>
  )
}