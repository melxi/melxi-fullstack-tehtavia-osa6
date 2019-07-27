const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const votedAnecdote = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...votedAnecdote,
        votes: votedAnecdote.votes + 1
      }
      return state
        .map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    case 'ADD_NEW':
      const newAnecdote = {
        ...action.data
      }
      return [...state, newAnecdote]
    default:
      return state
  }
}

export const initializeAnecdotes = anecdotes => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const addAnecdote = (content) => {
  return {
    type: 'ADD_NEW',
    data: {
      content,
      votes: 0
    }
  }
}

export default anecdoteReducer