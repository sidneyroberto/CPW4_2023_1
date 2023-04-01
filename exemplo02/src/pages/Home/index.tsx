import { useCallback, useState } from 'react'
import WordCard from '../../components/WordCard'
import { Word, isInstanceOfWordNotFound } from '../../models/Word'
import { WordService } from '../../services/WordService'
import {
  HomeContainer,
  NoResultsFoundMessage,
  ResultsFoundMessage,
  SearchButton,
  SearchInput,
  SearchPanel,
} from './styles'

const wordService = new WordService()

const Home = () => {
  const [filter, setFilter] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [noWordFound, setNoWordFound] = useState(false)
  const [words, setWords] = useState<Word[]>([])

  const searchWords = useCallback(async () => {
    if (filter) {
      setIsSearching(true)
      setNoWordFound(false)
      const response = await wordService.findWords(filter)
      if (isInstanceOfWordNotFound(response)) {
        setNoWordFound(true)
      } else {
        setWords(response as Word[])
        setFilter('')
      }

      setIsSearching(false)
    }
  }, [isSearching, filter])

  return (
    <HomeContainer>
      <SearchPanel>
        <SearchInput
          data-cy='search-input'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <SearchButton
          data-cy='search-button'
          value='Buscar'
          disabled={isSearching}
          onClick={searchWords}
        />
      </SearchPanel>

      {!isSearching && words.length > 0 && (
        <>
          <ResultsFoundMessage>
            {words.length} resultado(s) encontrado(s)
          </ResultsFoundMessage>

          {words.map((w, index) => (
            <WordCard key={index} order={index + 1} word={w} />
          ))}
        </>
      )}

      {!isSearching && noWordFound && (
        <NoResultsFoundMessage>
          Nenhuma palavra encontrada
        </NoResultsFoundMessage>
      )}
    </HomeContainer>
  )
}

export default Home
