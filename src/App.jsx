import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import MovieListMain from './components/5_MovieList/MovieListMain';
import CounterWrapper from './components/6_Zustand/CounterWrapper';

const GlobaStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

function App() {
  return (
    <>
    <GlobaStyle />
    {/* <MovieListMain /> */}
    <CounterWrapper/>
    </>
  )
}

export default App
