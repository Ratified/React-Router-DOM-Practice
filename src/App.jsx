import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Layouts/Home'
import About from './Layouts/About'
import Contact from './Layouts/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Router>
          <div>

              <Navbar />
            
              <Routes>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>

          </div>

      </Router>
    </div>
  )
}

export default App
