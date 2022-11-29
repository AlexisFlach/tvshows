import { ShowsProvider } from './context/ShowsContext'
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/routes'
import { ErrorBoundaries } from './components/ErrorBoundaries';
import GlobalStyles from './components/UI/global'
import Navbar from './components/UI/Navbar/Navbar';
import {Container} from './components/UI/Container/Container.styled';
import { ThemeProvider } from 'styled-components'


const App = () => {

  const theme = {
    mobile: '768px'
  }
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App