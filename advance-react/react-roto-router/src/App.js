import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'

function App() {

  return (
    <Router>
        
        <nav className='header'>
          <Link className='header-link' to="/">
              Home          
          </Link>
          <Link className='header-link' to="/about">
              About
          </Link>
          <Link className='header-link' to="/services">
              Services
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path='services' element={<Services />} />
        </Routes>

        <Footer />
    </Router>
  )
}

export default App