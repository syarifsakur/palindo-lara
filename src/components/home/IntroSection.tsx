import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import departmentLogo from '../../assets/Dinas Kebudayaan Provinsi Sulawesi Tengah HITAM.png'

export default function IntroSection() {
  return (
    <section className="intro-section" id="tentang">
      <div className="intro-heading fade-up">
        <div className="section-label">01 / TENTANG PLATFORM</div>
        <img
          className="department-logo"
          src={departmentLogo}
          alt="Dinas Kebudayaan Provinsi Sulawesi Tengah"
        />
      </div>

      <div className="intro-grid">
        <h2 className="fade-up">Budaya adalah<br /><em>identitas kita.</em></h2>
        <div>
          <p className="intro-lead fade-up">
            Dari lembah Lore hingga pesisir Toli-Toli, Sulawesi Tengah menyimpan cerita yang tak terhitung.
          </p>
          <p className="muted-copy fade-up fade-up-delay-1">
            Platform ini hadir untuk mendokumentasikan, memperkenalkan, dan merayakan warisan budaya
            yang menjadi jati diri masyarakat Sulawesi Tengah.
          </p>
          <Link className="text-link fade-up fade-up-delay-2" to="/jelajah">
            Kenali lebih dekat <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="stat-row fade-up">
        <div><strong>13</strong><span>Kabupaten & kota</span></div>
        <div><strong>100+</strong><span>Warisan budaya</span></div>
        <div><strong>1</strong><span>Ruang untuk semua</span></div>
      </div>
    </section>
  )
}
