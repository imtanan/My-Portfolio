import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Nav from './components/Nav'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Nav />
  <Hero />
</>
  )
}

export default App
