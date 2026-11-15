import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import BanuataPage from './pages/BanuataPage'
import BeritaPage from './pages/BeritaPage'
import HomePage from './pages/HomePage'
import JelajahPage from './pages/JelajahPage'
import TentangPage from './pages/TentangPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Banuata Portal Pages */}
        <Route path="/" element={<BanuataPage />} />
        <Route path="/tentang" element={<BanuataPage />} />
        <Route path="/data-tenaga" element={<BanuataPage />} />
        <Route path="/data-lembaga" element={<BanuataPage />} />

        {/* Kebudayaan & Koleksi Portal Pages with Header & Footer */}
        <Route element={<Layout />}>
          <Route path="/eksplorasi" element={<HomePage />} />
          <Route path="/jelajah" element={<JelajahPage />} />
          <Route path="/berita" element={<BeritaPage />} />
          <Route path="/profil" element={<TentangPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
