import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalVariablesProvider } from './contexts/GlobalVariables.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalVariablesProvider>
      <App />
    </GlobalVariablesProvider>
  </StrictMode>,
)
