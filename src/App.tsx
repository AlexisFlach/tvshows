import { ShowsProvider } from './context/ShowsContext'
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/routes'

const App = () => {

  return (
    <ShowsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ShowsProvider>
  )
}

export default App