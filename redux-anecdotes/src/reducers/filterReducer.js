const filterReducer = (state = '', action) => {
    console.log(action.filter);
    
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter
        default:
            return state
    }
}

export const filterAnecdote = (filter) => {
    return {
        type: 'SET_FILTER',
        filter
    }
}

export default filterReducer