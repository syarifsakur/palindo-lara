import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import BeritaPage from './pages/BeritaPage'
import HomePage from './pages/HomePage'
import JelajahPage from './pages/JelajahPage'
import TentangPage from './pages/TentangPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="jelajah" element={<JelajahPage />} />
          <Route path="berita" element={<BeritaPage />} />
          <Route path="tentang" element={<TentangPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
