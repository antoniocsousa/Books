import Header from './components/Header'
import Search from './components/Search'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #FE8330, #FFA832);
`

function App() {
  return (
    <>
      <AppContainer>
        <Header/>
        <Search/>
      </AppContainer>
    </>
  )
}

export default App
