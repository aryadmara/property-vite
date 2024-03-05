import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SectionPhoto from './views/section3'
import SectionAmenities from './views/section6'
import SectionCalculator from './views/section7'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SectionCalculator/>
    <SectionPhoto/>
    <SectionAmenities/>
    </>
  )
}

export default App
