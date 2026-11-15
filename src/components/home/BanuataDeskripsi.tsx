import { CheckCircle2, ShieldCheck, Sparkles, Users } from 'lucide-react'

export default function BanuataDeskripsi() {
  return (
    <section id="deskripsi" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fbf6ed] text-slate-800 border-b border-amber-900/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-amber-700 mb-2">Tentang BANUA’TA</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#451316]">
            Rumah Kita, Data Kita, Budaya Kita
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Membangun basis data yang kuat untuk tata kelola kebudayaan Sulawesi Tengah yang inklusif, responsif, dan berkelanjutan.
          </p>
        </div>

        {/* Content Grid: Articles + Quote Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article (8 columns) */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-amber-900/10 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base text-justify">
            <p>
              <strong className="text-[#451316] font-serif text-lg">BANUA’TA</strong> merupakan inisiatif transformasi tata kelola pendataan tenaga dan lembaga kebudayaan di Provinsi Sulawesi Tengah melalui pengelolaan data berbasis digital yang inklusif dan responsif gender.
            </p>
            <p>
              BANUA’TA berasal dari ungkapan bahasa daerah yang bermakna <strong className="text-amber-800">“Rumah Kita”</strong>. Filosofi ini menegaskan bahwa tenaga dan lembaga kebudayaan merupakan bagian penting dari rumah besar kebudayaan Sulawesi Tengah yang perlu dikenali, didata, dan diberdayakan secara terpadu.
            </p>
            <p>
              BANUA’TA dirancang untuk menghimpun data tenaga kebudayaan, pelaku seni, komunitas, lembaga adat, dan lembaga kebudayaan lainnya secara terstruktur. Data mencakup identitas dasar, domisili, bidang keahlian atau kegiatan, profil kelembagaan, serta informasi pendukung yang relevan.
            </p>
            <p>
              Pengelolaan data dilaksanakan melalui tahapan pendataan, verifikasi, validasi, penyimpanan, pemanfaatan, dan pemutakhiran secara berkala, dengan memperhatikan persetujuan responden serta perlindungan data pribadi.
            </p>
            <p>
              Pengembangan BANUA’TA diarahkan melalui pemanfaatan situs web Dinas Kebudayaan Provinsi Sulawesi Tengah sebagai media pengelolaan data digital. Dengan demikian, BANUA’TA bukan sekadar kegiatan pengumpulan data, melainkan transformasi tata kelola pendataan agar lebih sistematis, akurat, mudah diperbarui, dan berkelanjutan.
            </p>
            <p>
              Data diharapkan menjadi dasar perencanaan pembinaan tenaga dan lembaga kebudayaan, pemetaan potensi budaya, peningkatan kapasitas sumber daya manusia kebudayaan, serta perumusan program pemajuan kebudayaan yang lebih tepat sasaran.
            </p>
            <p>
              BANUA’TA mengedepankan prinsip inklusivitas dan responsivitas gender agar pendataan dapat menggambarkan keragaman potensi kebudayaan, termasuk keterlibatan perempuan, generasi muda, penyandang disabilitas, dan komunitas adat sesuai kebutuhan serta persetujuan yang relevan.
            </p>

            {/* Pill Tags */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                <CheckCircle2 size={13} className="text-amber-600" /> Pendataan terstruktur
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-50 text-red-900 border border-red-200">
                <ShieldCheck size={13} className="text-red-600" /> Perlindungan data pribadi
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200">
                <Users size={13} className="text-emerald-600" /> Inklusif & responsif gender
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                <Sparkles size={13} className="text-blue-600" /> Pemutakhiran berkala
              </span>
            </div>
          </article>

          {/* Quote Sidebar (4 columns) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-[#451316] to-[#67151a] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="text-6xl font-serif text-amber-400/20 absolute -top-2 -left-1 select-none pointer-events-none">“</div>
              <blockquote className="relative z-10 font-serif text-2xl sm:text-3xl font-bold leading-snug text-amber-100 pt-4">
                Rumah Kita,<br />
                <span className="text-amber-400">Data Kita,</span><br />
                Budaya Kita.
              </blockquote>
              <p className="mt-6 text-xs text-amber-200/80 leading-relaxed font-sans border-t border-white/10 pt-4">
                BANUA’TA — Basis Data Tenaga dan Lembaga Kebudayaan Dinas Kebudayaan Provinsi Sulawesi Tengah.
              </p>
            </div>

            {/* Quick Principles Card */}
            <div className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-[#451316] text-base">Prinsip Pendataan</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong>Transparansi:</strong> Publikasi data agregat dan profil umum tanpa mengekspos kontak atau data pribadi sensitif.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong>Keterhubungan Langsung:</strong> Data sinkron secara real-time dengan Google Spreadsheet resmi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong>Berbasis Pemberdayaan:</strong> Menjadi rujukan utama pembinaan, fasilitasi, dan kemitraan kebudayaan.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
