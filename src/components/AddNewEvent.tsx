import React from 'react'
import Button from '@material-ui/core/Button';
import styles from 'styled-components'
import TextField from '@material-ui/core/TextField';

import { Formik, Form, Field } from 'formik'
import { Props } from './../services/interfaces'
import { addEvents } from './../store/action'
import { useDispatch } from 'react-redux'

const Wrapper = styles.div`
  div{
    display: flex;
    justify-content: space-around;
    margin: 50px 0;
  }
  section{
    position:absolute;
    right: 50px;
    width: 400px;
    display:flex;
    justify-content: space-around;
  }
  button{
    text-transform: lowercase;
  }
`

export const AddNewEvent: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const goBack = () => {
    props.history?.push('/')
  }
  return (
    <Wrapper>
      <Formik
        initialValues={{ title: '', place: '', email: '' }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(addEvents(values))

        }}
      >
        <Form>
          <div>
            <Field name='title' placeholder='Title' />
            <Field name='place' placeholder='Place' />
            <Field name='email' placeholder='Email' />
          </div>
          <section>
            <Button variant="outlined" type='submit' color="primary">add event</Button>
            <Button variant="outlined" color="secondary">reset</Button>
            <Button onClick={goBack} variant="contained" color="secondary">go back</Button>
          </section>
        </Form>


      </Formik>

    </Wrapper>
  )
}