import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardComponent from './components/card'
import Section2 from './views/Section2'
import Section4 from './views/Section4'
import Section8 from './views/Section8'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1> Property Project Landing Page</h1>
      <Section8></Section8>
    </div>
    </>
  )
}

export default App
