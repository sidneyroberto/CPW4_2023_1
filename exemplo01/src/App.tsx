import { useState } from 'react'
import Header from './components/Header'
import Counter from './components/Counter'

const App = () => {
  const [value, setValue] = useState(0)

  return (
    <>
      <Header title='Exemplo Cypress' />

      <Counter value={value} />
    </>
  )
}

export default App
