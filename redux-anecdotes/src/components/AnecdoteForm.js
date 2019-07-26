import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const add = (event) => {
    event.preventDefault()
    const content = event.target.add.value
    props.dispatch(addAnecdote(content))
    event.target.add.value = ''
    props.dispatch(setNotification(content))
    setTimeout(() => {
      props.dispatch(setNotification(null))
    }, 3000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name="add"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default connect()(AnecdoteForm)
