import React from 'react'
import Button from '@material-ui/core/Button';
import styles from 'styled-components'

import { Props } from './../services/interfaces'
import { useSelector } from 'react-redux'

const Wrapper = styles.div`

position: relative;
  h1{
    margin:20px;
  }
  button{
    position: absolute;
    right: 200px;
    text-transform: lowerCase;
  }
  div{
    border: 1px solid black;
    padding: 10px;
    display: inline-block;
  }
`

interface RootState {
  id: number
  title: string,
  place: string,
  email: string
}
interface Events {
  events: RootState[]
}
export const ListOfEvents: React.FC<Props> = (props) => {
  const stateName = (state: Events) => state.events
  const Event = useSelector(stateName)


  const goForward = () => {
    props.history.push('/add')
  }
  return (
    <Wrapper>
      <h1>{Event.map((one: RootState) => (
        <div key={one.title}>
          <p>{one.title}</p>
          <p>{one.place}</p>
          <p>{one.email}</p>
        </div>
      ))}</h1>

      <Button onClick={goForward} variant="contained" color="primary">
        add event
        </Button>
    </Wrapper>

  )
}