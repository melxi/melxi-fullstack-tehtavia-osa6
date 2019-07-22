import React from 'react';

const App = (props) => {
  const anecdotes = props.store
  .getState()
  .sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })  
  }

  const add = (event) => {
    event.preventDefault()
    const content = event.target.add.value
    props.store.dispatch({
      type: 'ADD_NEW',
      data: {
        content,
        votes: 0
      }
    })
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