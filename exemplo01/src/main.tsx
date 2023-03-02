import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FontStyles from './assets/fonts/fonts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <FontStyles />
    <App />
  </>
)
