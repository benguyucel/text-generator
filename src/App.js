import { createGlobalStyle } from 'styled-components'
import Header from './Header';
const GlobalStyle = createGlobalStyle`
body{
  font-size: 62.5%;
  background-color: #9c88ff;
}
.App{
  padding: 1rem;
  width: 100%;
  display: flex;
}
`

function App() {
  return (
    <>
      <Header />
      <div className='App'>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
