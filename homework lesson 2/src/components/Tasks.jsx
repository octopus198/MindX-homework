import React from 'react'

export const Tasks = ({...props}) => {
  const handleChange = () => {
    props.checked = !props.checked;
    console.log(props.checked)
    props.onChange();
  }
  return (
    <div className='tasks'>
      <input type="checkbox" checked={props.checked} onChange={handleChange} />
      <span>{props.text}</span>
      {props.checked ? (<span>Done</span> ) : ("")}
    </div>
  )
}

export default Tasks
