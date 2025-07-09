import Header from './components/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #FE8330, #FFA832);

  li {
    list-style: none;
  }
`

function App() {
  return (
    <>
      <AppContainer>
        <Header/>
      </AppContainer>
    </>
  )
}

export default App
