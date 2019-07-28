import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      return state
        .map(anecdote => anecdote.id !== action.data.id ? anecdote : action.data)
    case 'ADD_NEW':
      const newAnecdote = {
        ...action.data
      }
      return [...state, newAnecdote]
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const updatedAnecdote = await anecdoteService.update(anecdote.id, votedAnecdote)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export const addAnecdote = (content) => {
  return async dispatch => {    
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
      type: 'ADD_NEW',
      data: newAnecdote
    })
  }
}

export default anecdoteReducer