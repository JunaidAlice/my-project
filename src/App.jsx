import { useState } from 'react'


import Advice from './Advice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Advice/>
    </>
  )
}

export default App
