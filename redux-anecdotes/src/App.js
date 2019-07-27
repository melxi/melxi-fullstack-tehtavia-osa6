import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer' 
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = (props) => {
  useEffect(() => {
    props.initializeAnecdotes()
  })

  return (
    <div>
      <h2>Programming anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App)