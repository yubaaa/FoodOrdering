import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Button>CLICK ME BRO !</Button>
  )
}

export default App
