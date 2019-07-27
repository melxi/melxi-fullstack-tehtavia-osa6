import React from 'react'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const add = async (event) => {
    event.preventDefault()
    const content = event.target.add.value
    event.target.add.value = ''
    const newAnecdote = await anecdoteService.create(content)
    props.addAnecdote(newAnecdote)
    props.setNotification(content)
    setTimeout(() => {
      props.setNotification(null)
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

const mapDispatchToProps = {
  addAnecdote,
  setNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
