import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import  TStack  from './components/TStack'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Nav />
  <Hero />
  <Projects />
  <TStack />
  <Contacts />
</>
  )
}

export default App
