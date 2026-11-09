import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import departmentLogoWhite from '../../assets/Dinas Kebudayaan Provinsi Sulawesi Tengah PUTIH.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <Link className="brand brand--footer" to="/">
            <img
              className="brand-logo brand-logo--white"
              src={departmentLogoWhite}
              alt="Dinas Kebudayaan Provinsi Sulawesi Tengah"
            />
          </Link>
          <p className="footer-tagline">Merawat ingatan.<br />Menjaga warisan.</p>
          <p className="footer-desc">
            Platform resmi dokumentasi dan eksplorasi warisan budaya Provinsi Sulawesi Tengah.
          </p>
          <a className="back-top" href="#top">Kembali ke atas <ArrowUpRight size={14} /></a>
        </div>

        <div className="footer-col">
          <h4>Navigasi</h4>
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/jelajah">Jelajah Budaya</Link></li>
            <li><Link to="/berita">Berita</Link></li>
            <li><Link to="/tentang">Tentang Kami</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Eksplorasi</h4>
          <ul>
            <li><Link to="/jelajah">Cagar Budaya</Link></li>
            <li><Link to="/jelajah">Warisan Takbenda</Link></li>
            <li><Link to="/jelajah">Ruang Adat</Link></li>
            <li><Link to="/jelajah">Cerita Pilihan</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Kontak</h4>
          <ul>
            <li>
              <a href="#">
                <MapPin size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }} />
                Palu, Sulawesi Tengah
              </a>
            </li>
            <li>
              <a href="#">
                <Phone size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }} />
                (0451) 421-XXX
              </a>
            </li>
            <li>
              <a href="#">
                <Mail size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }} />
                info@disbud.sultengprov.go.id
              </a>
            </li>
            <li>
              <a href="#">
                <Clock size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }} />
                Sen – Jum, 08:00 – 16:00
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dinas Kebudayaan Provinsi Sulawesi Tengah</span>
        <span>Dibuat untuk kebudayaan Sulawesi Tengah</span>
      </div>
    </footer>
  )
}
