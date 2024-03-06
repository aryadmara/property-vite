import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardComponent from './components/card'
import Section2 from './views/Section2'
import Section4 from './views/Section4'
import Section8 from './views/Section8'

import SectionPhoto from './views/section3'
import SectionAmenities from './views/section6'
import SectionCalculator from './views/section7'
import Hero from './views/Hero'
import Navbar from './components/Navbar'
import Floor from './views/Floor'
import Footer from "./views/Footer"
import MapGoogle from './components/Map'


function App() {
  const [count, setCount] = useState(0)

  return (


    <div className=' relative'>
      <Navbar />
      <Hero />
      <Section2 />
      <SectionPhoto/>
      <Section4/>
      <Floor />
    <SectionAmenities/>
       <SectionCalculator/>
    <Section8 />
      <MapGoogle />
      <Footer />
    </div>
  )
}

export default App
