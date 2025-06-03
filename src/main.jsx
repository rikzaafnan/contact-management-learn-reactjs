import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import UserRegister from './components/User/UserRegister'
import UserLogin from './components/User/UserLogin'
import Contact from './components/Dashboard/Contact/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/register" element={<UserRegister/>}></Route>
          <Route path="/login" element={<UserLogin/>}></Route>
        </Route>
        <Route path="/dashboard" element={<div>dashboard</div>}></Route>
        <Route path="/dashboard/contacts" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
