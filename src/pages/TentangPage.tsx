import { ArrowUpRight, Shield, BookOpen, Compass, HeartHandshake, MapPin, Clock, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import departmentLogo from '../assets/Dinas Kebudayaan Provinsi Sulawesi Tengah HITAM.png'
import heroImage from '../assets/hero.png'

const pillars = [
  {
    icon: Shield,
    title: 'Perlindungan',
    desc: 'Menyelamatkan, merawat, dan mengamankan warisan budaya bendawi maupun takbendawi dari kepunahan dan kerusakan zaman.',
  },
  {
    icon: BookOpen,
    title: 'Pengembangan',
    desc: 'Melakukan riset arkeologis, kajian antropologis, serta revitalisasi seni pertunjukan dan pengetahuan tradisional lokal.',
  },
  {
    icon: Compass,
    title: 'Pemanfaatan',
    desc: 'Mengoptimalkan potensi budaya untuk edukasi generasi muda, diplomasi budaya, dan penguatan identitas bangsa.',
  },
  {
    icon: HeartHandshake,
    title: 'Pembinaan',
    desc: 'Memberdayakan komunitas adat, sanggar seni, dan pelaku budaya dalam ekosistem kebudayaan yang inklusif dan berkelanjutan.',
  },
]

export default function TentangPage() {
  return (
    <div className="page-shell">
      {/* ─── Hero / Header ─── */}
      <section className="page-hero">
        <div className="page-hero-inner fade-up">
          <div className="section-label">04 / TENTANG KAMI</div>
          <h1>
            Menjaga Akar,<br /><em>Menumbuhkan Masa Depan</em>
          </h1>
          <p className="page-hero-copy">
            Dinas Kebudayaan Provinsi Sulawesi Tengah mengemban amanah melestarikan pusaka
            leluhur dari 13 kabupaten dan kota, menghubungkan peradaban megalitik purba dengan generasi hari ini.
          </p>
        </div>
      </section>

      {/* ─── Intro Section ─── */}
      <section className="intro-section" style={{ paddingTop: 20 }}>
        <div className="intro-heading fade-up">
          <div className="section-label">PROFIL LEMBAGA</div>
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
              Sebagai salah satu kawasan megalitik tertua dan terpenting di Asia Tenggara, Sulawesi Tengah memiliki
              kekayaan warisan materiil dan imateriil yang tidak ternilai. Portal ini merupakan representasi museum
              digital terbuka bagi seluruh masyarakat dunia.
            </p>
            <p className="muted-copy fade-up fade-up-delay-2">
              Kami mendokumentasikan, meneliti, dan mempublikasikan data cagar budaya, tradisi lisan, adat istiadat,
              serta karya seni pertunjukan agar terus berdenyut dalam kehidupan masyarakat modern.
            </p>
          </div>
        </div>

        <div className="stat-row fade-up">
          <div><strong>13</strong><span>Kabupaten & kota</span></div>
          <div><strong>100+</strong><span>Warisan budaya</span></div>
          <div><strong>1</strong><span>Ruang untuk semua</span></div>
        </div>
      </section>

      {/* ─── Visi & Misi ─── */}
      <section className="vision-section">
        <div className="vision-inner">
          <div className="vision-card fade-up">
            <span className="section-label" style={{ color: 'var(--gold-light)' }}>VISI KAMI</span>
            <h3>
              Terwujudnya Sulawesi Tengah yang Maju dan Mandiri Berlandaskan Kearifan Budaya Lokal yang Berkelanjutan.
            </h3>
          </div>

          <div className="mission-card fade-up fade-up-delay-1">
            <span className="section-label">MISI UTAMA</span>
            <ul>
              <li>Memperkuat regulasi dan perlindungan terhadap seluruh situs cagar budaya dan cagar alam megalitikum.</li>
              <li>Meningkatkan kualitas pendokumentasian dan digitalisasi warisan budaya takbenda berbasis teknologi modern.</li>
              <li>Membangun ekosistem kebudayaan yang menyejahterakan pelaku budaya, komunitas adat, dan sanggar lokal.</li>
              <li>Menyelenggarakan ruang edukasi publik dan diplomasi kebudayaan di kancah nasional maupun internasional.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 4 Pilar Pelestarian ─── */}
      <section className="pillars-section">
        <div className="section-heading fade-up">
          <div>
            <div className="section-label">PILAR PELESTARIAN</div>
            <h2>Fokus <em>Strategis</em></h2>
          </div>
          <p>Pendekatan terpadu untuk memastikan keberlanjutan ekosistem kebudayaan Sulawesi Tengah.</p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div className={`pillar-card fade-up fade-up-delay-${idx + 1}`} key={pillar.title}>
                <div className="pillar-icon">
                  <Icon size={24} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─── Kunjungan & Kontak Museum ─── */}
      <section className="visit-section">
        <div className="visit-grid">
          <div
            className="visit-image"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(80, 14, 20, .35), transparent), url("${heroImage}")` }}
          >
            <div className="visit-image-badge">
              <strong>KUNJUNGI KAMI</strong>
              <span>Palu, Sulawesi Tengah</span>
            </div>
          </div>

          <div className="visit-info fade-up">
            <div className="section-label">LAYANAN & INFORMASI PUBLIK</div>
            <h2>Rencanakan <em>Kunjungan Anda</em></h2>
            <p>
              Kami mengundang peneliti, pelajar, wisatawan, dan masyarakat umum untuk berkonsultasi,
              mengeksplorasi arsip museum, atau berpartisipasi dalam program kebudayaan kami.
            </p>

            <div className="visit-details">
              <div className="visit-detail-item">
                <MapPin size={20} color="var(--maroon)" />
                <div>
                  <strong>Alamat Kantor & Museum</strong>
                  <p>Jl. Bantilan No. 32, Palu Barat, Kota Palu, Sulawesi Tengah 94221</p>
                </div>
              </div>

              <div className="visit-detail-item">
                <Clock size={20} color="var(--maroon)" />
                <div>
                  <strong>Jam Pelayanan / Kunjungan</strong>
                  <p>Senin – Kamis: 08.00 – 16.00 WITA<br />Jumat: 08.00 – 16.30 WITA<br />Sabtu – Minggu: Tutup (Kunjungan Khusus via Reservasi)</p>
                </div>
              </div>

              <div className="visit-detail-item">
                <Phone size={20} color="var(--maroon)" />
                <div>
                  <strong>Telepon & Layanan Informasi</strong>
                  <p>(0451) 421-234 / Hotline WA: +62 811-4567-890</p>
                </div>
              </div>

              <div className="visit-detail-item">
                <Mail size={20} color="var(--maroon)" />
                <div>
                  <strong>Surat Elektronik</strong>
                  <p>info@disbud.sultengprov.go.id</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <Link className="button button--primary" to="/jelajah">
                Mulai Jelajah Koleksi <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
