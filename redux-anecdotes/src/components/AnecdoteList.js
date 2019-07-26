import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (id) => {
    props.dispatch(voteAnecdote(id))
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    props.dispatch(setNotification(anecdote.content))
    setTimeout(() => {
      props.dispatch(setNotification(null))
    }, 3000)
  }
  
  const anecdotesToShow = (anecdote) => {
    return anecdote.content.toLowerCase().indexOf(props.filter.toLowerCase()) >= 0
  }

  const anecdotes = props.anecdotes
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

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(AnecdoteList)
