
import './index.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Menu from './Menu';
import Detail from './Detail';


function App() {
  

  return (
    <div>
      <Navbar />
      <div className=' flex justify-center'>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </div>
      
    </div>
  )
}

export default App
