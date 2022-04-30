import './App.css'
import Catalogue from './components/Catalogue'
import SearchBar from './components/SearchBar'

const App = (): JSX.Element => {
  return (
    <main className='container-fluid p-0'>
      <SearchBar />
      <Catalogue />
    </main>
  )
}

export default App