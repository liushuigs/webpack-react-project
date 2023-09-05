import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/main.css'


// 不使用react-router-dom，HMR正常
// import App from './App'
// createRoot(document.getElementById('root')).render(<App />)

// 使用 react-router-dom，HMR不正常
import HomePage from './views/index'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
)