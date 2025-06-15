import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import UserRegister from './components/User/UserRegister'
import UserLogin from './components/User/UserLogin'
import Contact from './components/Dashboard/Contact/Contact'
import DashboardLayout from './components/DashboardLayout'
import UserProfile from './components/User/UserProfile'
import UserLogout from './components/User/UserLogout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/register" element={<UserRegister/>}></Route>
          <Route path="/login" element={<UserLogin/>}></Route>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route path="contacts" element={<Contact/>}></Route>
          <Route path="users/profile" element={<UserProfile/>}></Route>
          <Route path="users/logout" element={<UserLogout/>}></Route>
        </Route>
        {/* <Route path="/dashboard/contacts" element={<Contact/>}></Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
