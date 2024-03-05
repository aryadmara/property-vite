import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SectionPhoto from './views/section3'
import SectionAmenities from './views/section6'
import SectionCalculator from './views/section7'

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
      <SectionPhoto/>
      <Floor />
    <SectionAmenities/>
       <SectionCalculator/>
      <Footer />
    </div>
  )
}

export default App
