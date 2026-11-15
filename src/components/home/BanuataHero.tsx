import { ArrowDown, Database, Landmark, Users } from 'lucide-react'
import banuataLogo from '../../assets/banuata-logo.png'

interface BanuataHeroProps {
  totalTenaga: number
  totalLembaga: number
}

export default function BanuataHero({ totalTenaga, totalLembaga }: BanuataHeroProps) {
  return (
    <section
      id="beranda"
      className="relative isolation-isolate overflow-hidden bg-gradient-to-br from-[#1a0508] via-[#4c1518] to-[#2a080d] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-amber-500/20 shadow-2xl"
    >
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-red-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Banner Logo */}
        <div className="mb-6 inline-flex p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-amber-400/30 shadow-lg">
          <img
            src={banuataLogo}
            alt="Logo BANUA’TA"
            className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-md"
          />
        </div>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Basis Data Tenaga dan Lembaga Kebudayaan Sulawesi Tengah
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-tight text-white max-w-4xl">
          Rumah Kita, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">Data Kita,</span><br />
          Budaya Kita.
        </h1>

        {/* Tagline / Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-amber-100/90 max-w-3xl leading-relaxed font-sans">
          Basis data digital terintegrasi untuk mengenali, menghimpun, dan memberdayakan tenaga serta lembaga kebudayaan di 13 Kabupaten/Kota Sulawesi Tengah secara inklusif, terstruktur, dan berkelanjutan.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#tenaga"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-900/30 hover:scale-105 transition-all duration-200"
          >
            <Users size={18} />
            Jelajahi Data Tenaga
          </a>
          <a
            href="#lembaga"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-amber-100 border border-amber-400/30 backdrop-blur-sm font-semibold text-sm sm:text-base transition-all duration-200"
          >
            <Landmark size={18} />
            Data Lembaga
          </a>
          <a
            href="#deskripsi"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-amber-200/80 hover:text-white text-sm font-medium transition-colors"
          >
            Tentang BANUA’TA <ArrowDown size={16} />
          </a>
        </div>

        {/* Highlight Stats Grid */}
        <div className="mt-12 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
            <div className="flex justify-center mb-1 text-amber-400"><Users size={20} /></div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-white">
              {totalTenaga > 0 ? totalTenaga.toLocaleString('id-ID') : '100+'}
            </div>
            <div className="text-xs text-amber-200/70 mt-1">Tenaga Budaya Terdata</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
            <div className="flex justify-center mb-1 text-amber-400"><Landmark size={20} /></div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-white">
              {totalLembaga > 0 ? totalLembaga.toLocaleString('id-ID') : '50+'}
            </div>
            <div className="text-xs text-amber-200/70 mt-1">Lembaga Kebudayaan</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
            <div className="flex justify-center mb-1 text-amber-400"><Database size={20} /></div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-white">13</div>
            <div className="text-xs text-amber-200/70 mt-1">Kabupaten & Kota</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
            <div className="flex justify-center mb-1 text-amber-400"><span className="text-lg">⭐</span></div>
            <div className="text-2xl sm:text-3xl font-bold font-serif text-white">10</div>
            <div className="text-xs text-amber-200/70 mt-1">Objek Pemajuan Budaya</div>
          </div>
        </div>

        {/* Note banner */}
        <div className="mt-8 text-xs text-amber-300/80 font-medium tracking-wide">
          ✦ Pendataan inklusif · Responsif gender · Perlindungan data pribadi · Pemutakhiran berkala ✦
        </div>
      </div>
    </section>
  )
}
