import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )
})
