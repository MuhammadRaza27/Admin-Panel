import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Sidebar } from './component/Sidebar'
import Home from './component/Home/Home'
import Users from './component/User/Users'
import Product from './component/Product/product'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import './App.css'

const Layout = () => (
  <div className="d-flex" style={{ height: '100vh' }}>
    <Sidebar />
    <div className="flex-grow-1 p-4 bg-light">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  </div>
)

function App() {
  return <Layout />
}

export default App
