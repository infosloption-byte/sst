import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@/styles/app.css'
import { App } from '@/App'
import { BrowserRouter } from '@/router'

const container = document.getElementById('root')!

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered, so hydrate; in `npm run dev` the root is empty.
if (container.firstElementChild) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
