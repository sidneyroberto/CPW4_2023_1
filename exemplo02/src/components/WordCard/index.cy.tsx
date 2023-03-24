import { BrowserRouter } from 'react-router-dom'
import WordCard from '.'
import { Word } from '../../models/Word'
import FontStyles from '../../assets/fonts/fonts'

describe('<WordCard />', () => {
  it('should render word info correctly', () => {
    const word: Word = {
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
    }

    const order = 1

    cy.mount(
      <BrowserRouter>
        <FontStyles />
        <WordCard word={word} order={order} />
      </BrowserRouter>
    )
  })
})
