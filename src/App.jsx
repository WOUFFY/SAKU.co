import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import About from './Pages/About'

function App() {
return(
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
      </Routes>
    </Router>
  </>
  )
}

export default App
