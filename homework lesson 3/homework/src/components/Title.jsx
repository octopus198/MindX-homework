import React from 'react'

const Title = ({headerTitle, text, backgroundColor, border}) => {
  return (
    <div style={{backgroundColor, border}}> 
      <h1>{headerTitle}</h1>
      <p>{text}</p>
      </div>
  )
}

export default Title