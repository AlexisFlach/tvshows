import { ShowsProvider } from './context/ShowsContext'
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/routes'
import { ErrorBoundaries } from './components/ErrorBoundaries';
import GlobalStyles from './components/UI/global'
import Navbar from './components/UI/Navbar/Navbar';
import {Container} from './components/UI/Container/Container.styled';

const App = () => {

  return (
    <ShowsProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Container>
        <ErrorBoundaries>
          <Router />
        </ErrorBoundaries>
        </Container>
      </BrowserRouter>
    </ShowsProvider>
  )
}

export default App