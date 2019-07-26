import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div>
      {props.notification && 
        <div style={style}>
          {props.notification}
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(Notification)