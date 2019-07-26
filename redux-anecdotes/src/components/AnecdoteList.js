import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (id) => {
    props.store.dispatch(voteAnecdote(id))
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    props.store.dispatch(setNotification(anecdote.content))
    setTimeout(() => {
      props.store.dispatch(setNotification(null))
    }, 3000)
  }
  
  const anecdotesToShow = (anecdote) => {
    return anecdote.content.toLowerCase().indexOf(props.store.getState().filter.toLowerCase()) >= 0
  }

  const anecdotes = props.store
    .getState().anecdotes
    .sort((a, b) => b.votes - a.votes)
    .filter(anecdotesToShow)

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
