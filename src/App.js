
import  { createGlobalStyle } from 'styled-components'
import Content from './Content';
import Header from './Header';
const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body{
  font-size: 62.5%;
  background-color: #9c88ff;
 
}

.App{
  padding: 1rem;
  width: 100%;
  display: flex;
  gap: 1rem;
}
`
function App() {
  return (
    <>
      <Header />
      <div className='App'>
        <Content />
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
