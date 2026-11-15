import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import banuataLogo from '../../assets/banuata-logo.png'
import departmentLogoWhite from '../../assets/Dinas Kebudayaan Provinsi Sulawesi Tengah PUTIH.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <Link className="brand brand--footer flex items-center gap-3 mb-3" to="/">
            <img
              className="brand-logo brand-logo--white h-10 max-w-[130px] object-contain"
              src={departmentLogoWhite}
              alt="Dinas Kebudayaan Provinsi Sulawesi Tengah"
            />
            <span className="w-[1px] h-7 bg-white/20" />
            <img
              className="h-9 max-w-[140px] object-contain"
              src={banuataLogo}
              alt="BANUA’TA"
            />
          </Link>
          <p className="footer-tagline">“Rumah Kita, Data Kita,<br />Budaya Kita.”</p>
          <p className="footer-desc">
            BANUA’TA — Basis Data Tenaga dan Lembaga Kebudayaan Dinas Kebudayaan Provinsi Sulawesi Tengah.
          </p>
          <a className="back-top" href="#beranda">Kembali ke atas <ArrowUpRight size={14} /></a>
        </div>

        <div className="footer-col">
          <h4>Navigasi</h4>
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><a href="#deskripsi">Tentang BANUA’TA</a></li>
            <li><a href="#tenaga">Data Tenaga</a></li>
            <li><a href="#lembaga">Data Lembaga</a></li>
            <li><Link to="/jelajah">Jelajah Budaya</Link></li>
            <li><Link to="/berita">Berita</Link></li>
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
        <span>© 2026 BANUA’TA — Dinas Kebudayaan Provinsi Sulawesi Tengah</span>
        <span>Rumah Kita, Data Kita, Budaya Kita</span>
      </div>
    </footer>
  )
}
