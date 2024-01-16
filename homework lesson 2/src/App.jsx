
import './App.css'

import Footer from './components/Footer'
import InputTask from './components/InputTask'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className='main'>
    <div className='todolist'>
    <InputTask />
    <Tasks />
    <Footer />
    </div>
    </div>
  )
}

export default App
