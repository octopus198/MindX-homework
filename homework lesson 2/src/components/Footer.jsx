import React from 'react'

const Footer = (props) => {
  return (
    <div className='footer'>
        <p>{props.tasksLeft} tasks left!</p>
        <p>MindX todolist</p>
    </div>
  )
}

export default Footer