import React from 'react';
import { voteAnecdote, addAnecdote } from './reducers/anecdoteReducer';

const App = (props) => {
  const anecdotes = props.store
    .getState()
    .sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    props.store.dispatch(voteAnecdote(id))  
  }

  const add = (event) => {
    event.preventDefault()
    const content = event.target.add.value
    props.store.dispatch(addAnecdote(content))
    event.target.add.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name="add"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App