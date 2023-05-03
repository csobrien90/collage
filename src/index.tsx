import {createRoot} from 'react-dom/client'

import App from './App'

// 👇️ IMPORTANT: div ID has to match with index.html
const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(
    <App />
)