
import './App.css'
import Aside from './components/Aside'
import Box from './components/Box'
import Footer from './components/Footer'
import Title from './components/Title'
import Header from './components/Header'

function App() {
  let titleList = [{
    id:1,
    headerTitle: "Lorem ipsum dolor sit amet",
    backgroundColor: "gray",
    border:"solid 1px red"
  },
{
  id:2,
  headerTitle:"Title 01",
  text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,"
},
{
  id:3,
  headerTitle:"Title 02",
  text:"Accusantium eveniet sequi placeat nihil, impedit fugiat et sint delectus odio suscipit." 
},
{
  id:4,
  headerTitle:"Title 03",
  text:"ipsa laudantium error consectetur reiciendis quae sed." 
}]

let boxList = [{
  id:1,
  text: "Box"
},
{
  id:2,
  text: "Box"
},
{
  id:3,
  text: "Box"
},
{
  id:4,
  text: "Box"
}]

  return (
    <div className='main'>
    <Header />
    <div className='content'>
      <div className='title-list'>
      {titleList.map(item => {return <Title headerTitle={item.headerTitle} text={item.text} backgroundColor={item.backgroundColor} border={item.border}/> })}
      </div>
      <Aside />      
    </div>
    <div className='box-list'>
      {boxList.map(item => {return <Box text={item.text} /> })}
    </div>
    <Footer />
    </div>
  )
}

export default App
