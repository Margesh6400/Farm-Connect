import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home1'
import Dashboard from './pages/Dashboard'
import About from './pages/AboutUs'
import Contract from './pages/Contract'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contract" element={<Contract />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App