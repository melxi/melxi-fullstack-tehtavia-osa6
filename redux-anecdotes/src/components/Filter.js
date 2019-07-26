import React from 'react'
import { filterAnecdote } from '../reducers/filterReducer';

const Filter = (props) => {
  const handleChange = (event) => {
    props.store.dispatch(filterAnecdote(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter