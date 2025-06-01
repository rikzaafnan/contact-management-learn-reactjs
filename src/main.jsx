import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import UserRegister from './components/User/UserRegister'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/register" element={<UserRegister/>}>

          </Route>
        </Route>
        <Route path="/dashboard" element={<div>dashboard</div>}>

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
