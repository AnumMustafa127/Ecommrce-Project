import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'
function App() {
  return (
        <Router>
          <Routes>
            <Route path='/' element = {<First/>}/>
            <Route path='/Second' element = {<Second/>}/>
            <Route path='/Third' element = {<Third/>}/>
          </Routes>
        </Router>
  )
}

export default App
 