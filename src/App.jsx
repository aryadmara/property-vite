import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './views/Hero'
import Floor from './views/Floor'
import Footer from "./views/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' relative'>
      <Navbar />
      <Hero />
      <Floor />
      <Footer />
    </div>
  )
}

export default App
