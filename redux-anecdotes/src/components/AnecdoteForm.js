import React from 'react'

const AnecdoteForm = ({ add }) => {    
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

export default AnecdoteForm
