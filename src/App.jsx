import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home1'
import Dashboard from './pages/Dashboard'
import About from './pages/AboutUs'
import Contract from './pages/Contract'
import SignIn from './pages/SignIn'
import GetStarted from './pages/GetStarted'

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
            <Route path="/signin" element={<SignIn />} />
            <Route path="/getstarted" element={<GetStarted />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App