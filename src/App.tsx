import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import CatalogPage from './pages/CatalogPage'
import Banner from './widgets/Banner/Banner'
import Footer from './widgets/Footer/Footer'
import Header from './widgets/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />}/>
        <Route path="/catalog" element={<CatalogPage />}/>
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App