import { ArrowUpRight, ChevronDown, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero.png'

export default function HeroSection() {
  return (
    <section className="hero" id="beranda">
      <div className="hero-content">
        <p className="kicker fade-up"><span /> PUSAKA YANG TERUS HIDUP</p>
        <h1 className="fade-up fade-up-delay-1">
          Menemukan makna<br /><em>di balik warisan.</em>
        </h1>
        <p className="hero-copy fade-up fade-up-delay-2">
          Menjelajahi kekayaan budaya Sulawesi Tengah melalui cerita, tradisi,
          dan peninggalan yang menghubungkan kita dengan masa lalu.
        </p>
        <div className="hero-actions fade-up fade-up-delay-3">
          <Link className="button button--primary" to="/jelajah">
            Mulai menjelajah <ArrowUpRight size={17} />
          </Link>
          <Link className="watch-link" to="/tentang">
            <span className="play-icon"><Play size={12} fill="currentColor" /></span>
            Tentang platform
          </Link>
        </div>
      </div>

      <div className="hero-art" aria-label="Ilustrasi lanskap Sulawesi Tengah">
        <div className="sun" />
        <div
          className="hero-photo"
          style={{
            backgroundImage: `linear-gradient(150deg, transparent 25%, rgba(80, 14, 20, .15)), url("${heroImage}")`,
          }}
        />
        <div className="hero-stamp">
          <span>PALU</span>
          <strong>00°53′S<br />119°52′E</strong>
        </div>
        <div className="hero-caption">
          <span className="caption-line" /> Teluk Palu, Sulawesi Tengah
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown size={15} />
      </div>
    </section>
  )
}
