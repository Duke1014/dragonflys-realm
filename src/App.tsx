import Footbar from './components/Footbar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footbar />
    </Router>
  )
}

export default App
