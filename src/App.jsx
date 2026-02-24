import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'
import Fourth from './pages/Fourth'
import Fifth from './pages/Fifth'
function App() {
  return (
        <Router basename="/Ecommrce-Project/">
          <Routes>
            <Route path='/' element = {<First/>}/>
            <Route path='/Second' element = {<Second/>}/>
            <Route path='/Third' element = {<Third/>}/>
            <Route path='/Fourth' element = {<Fourth/>}/>
            <Route path='/Fifth' element = {<Fifth/>}/>
          </Routes>
        </Router>
  )
}

export default App
 