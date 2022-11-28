import { ShowsProvider } from './context/ShowsContext'
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/routes'
import { ErrorBoundaries } from './components/ErrorBoundaries';

const App = () => {

  return (
    <ShowsProvider>
      <ErrorBoundaries>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </ErrorBoundaries>
    </ShowsProvider>
  )
}

export default App