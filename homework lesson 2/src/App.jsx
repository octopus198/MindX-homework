
import './App.css'

import Footer from './components/Footer'
import InputTask from './components/InputTask'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {

let tasksLeft = 5;

let [listTask, setListTask] = useState([{
  id: 1,
  checked: true,
  name: "Clean up bedroom",
},
{
id:2,
checked: true,
name: "Buy some milk",
},
{
id: 3,
checked: true,
name: "Learn React"
},
{
id: 4,
checked: true,
name: "Feed pets"
}])

const handleChange = () => {
  console.log(listTask)
  setListTask([...listTask])
}

  return (
    <div className='main'>
    <div className='todolist'>
    <InputTask />
    {listTask.map(item => {return <Tasks text={item.name} checked={item.checked} key={item.id} onChange={handleChange} /> } )}
    <Footer tasksLeft={tasksLeft}/>
    </div>
    </div>
  )
}

export default App
