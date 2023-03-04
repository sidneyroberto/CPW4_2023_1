import { useState } from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import { ButtonPanel, ChangeValueButton } from './styles'

const App = () => {
  const [value, setValue] = useState(0)

  return (
    <>
      <Header title='Exemplo Cypress' />

      <Counter value={value} />

      <ButtonPanel>
        <ChangeValueButton
          data-cy='increment-button'
          onClick={() => setValue(value + 1)}
        >
          Incrementar
        </ChangeValueButton>
        <ChangeValueButton data-cy='reset-button' onClick={() => setValue(0)}>
          Zerar
        </ChangeValueButton>
      </ButtonPanel>
    </>
  )
}

export default App
