import Header from './components/Header'
import Search from './components/Search'
import Releases from './components/Releases'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <>
      <AppContainer>
        <Header/>
        <Search/>
        <Releases/>
      </AppContainer>
    </>
  )
}

export default App
