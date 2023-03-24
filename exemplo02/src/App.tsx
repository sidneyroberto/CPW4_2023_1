import { useState } from 'react'
import { Word } from './models/Word'
import WordCard from './components/WordCard'

const App = () => {
  const [word, setWord] = useState<Word>({
    term: 'heathen',
    audioUrls: [
      'https://api.dictionaryapi.dev/media/pronunciations/en/heathen-us.mp3',
    ],
    meanings: [
      'An adherent of the Germanic neo-pagan faith of Heathenry.',
      'Pertaining or adhering to the Germanic neo-pagan faith Heathenry.',
      'A person who does not follow a Christian religion; a pagan.',
      '(by extension) An uncultured or uncivilized person, philistine.',
      'Not adhering to Christian religion; pagan.',
      '(by extension) Uncultured; uncivilized; savage, philistine.',
    ],
  })
  const [order, setOrder] = useState(1)

  return <WordCard word={word} order={order} />
}

export default App
