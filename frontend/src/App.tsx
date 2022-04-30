import './App.css'
import Catalogue from './components/Catalogue'
import SearchBar from './components/SearchBar'
import Message from './components/Message'
import { useContext } from 'react'
import ProductContext from './context/ProductContext'

const App = (): JSX.Element => {
  const { loading } = useContext(ProductContext)

  // Showing message while retrieving products
  const showComponent = loading
    ? <Message icon='BiSearch' message='Buscando productos...' />
    : <Catalogue />

  return (
    <main className='container-fluid p-0'>
      <SearchBar />
      {showComponent}
    </main>
  )
}

export default App