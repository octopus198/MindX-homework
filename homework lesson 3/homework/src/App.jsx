
import './App.css'
import Aside from './components/Aside'
import Box from './components/Box'
import Footer from './components/Footer'
import Title from './components/Title'
import Header from './components/Header'

function App() {
  return (
    <div className='main'>
    <Header />
    <div className='content'>
      <div className='title-list'>
      <Title> 
      <div className='first-title'>
        <h1>Lorem ipsum dolor sit amet </h1>
        </div>
      </Title>
      <Title > 
        <h1>Title 01</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, 
        </p>
          <Title />
      </Title>
      <Title >
        <h1>Title 02</h1>
        <p>ccusantium eveniet sequi placeat nihil, impedit fugiat et sint delectus odio suscipit. </p>
      </Title>
      <Title>
        <h1>Title 03</h1>
        <p>ccusantium eveniet sequi placeat nihil, impedit fugiat et sint delectus odio suscipit. </p>
      </Title>
      </div>
      <Aside />      
    </div>
    <div className='box-list'>
    <Box />
    <Box />
    <Box />
    <Box />
    </div>
    <Footer />
    </div>
  )
}

export default App
