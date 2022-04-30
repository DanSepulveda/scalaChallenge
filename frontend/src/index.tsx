import { createRoot } from 'react-dom/client'
import App from './App'
import AppProvider from './context/ProductProvider'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <AppProvider>
    <App />
  </AppProvider>
)