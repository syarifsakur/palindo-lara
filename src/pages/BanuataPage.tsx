import { ChevronDown, ChevronUp, Database, Home, RefreshCw, Search, Users } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import banuataHero from '../assets/banuata_hero_bg.png'
import banuataLogo from '../assets/banuata-logo.png'
import BanuataNavbar from '../components/layout/BanuataNavbar'
import { fetchSheetData, LEMBAGA_HEADERS, SHEETS_DEF, TENAGA_HEADERS, type SheetItem } from '../services/banuataData'

type Directory = 'tenaga' | 'lembaga'

/* ─── Directory Panel ─────────────────────────── */
function DirectoryPanel({ type }: { type: Directory }) {
  const isTenaga = type === 'tenaga'
  const sheetConfig: SheetItem = isTenaga ? SHEETS_DEF.tenaga : SHEETS_DEF.lembaga
  const defaultHeaders = isTenaga ? TENAGA_HEADERS : LEMBAGA_HEADERS

  const [headers, setHeaders] = useState<string[]>(defaultHeaders)
  const [rows, setRows] = useState<string[][]>(sheetConfig.starter.slice(1))
  const [statusMessage, setStatusMessage] = useState<string>('Menampilkan data awal \u00b7 Menghubungkan ke Google Sheets...')
  const [statusType, setStatusType] = useState<'loading' | 'ok' | 'error'>('loading')
  const [query, setQuery] = useState('')
  const [pageSize, setPageSize] = useState(5)
  const [page, setPage] = useState(1)
  const [expandedCells, setExpandedCells] = useState<Record<string, boolean>>({})

  const visibleIndices = useMemo(() => {
    return headers
      .map((h, i) => ({ h, i }))
      .filter(({ h }) => !sheetConfig.hidePatterns.some((re) => re.test(h)))
      .map(({ i }) => i)
  }, [headers, sheetConfig.hidePatterns])

  const filtered = useMemo(() => {
    if (!query.trim()) return rows
    const q = query.toLocaleLowerCase('id-ID').trim()
    return rows.filter((row) =>
      visibleIndices.some((idx) => {
        const val = row[idx] || ''
        return val.toLocaleLowerCase('id-ID').includes(q)
      })
    )
  }, [rows, query, visibleIndices])

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.max(1, Math.min(page, pages))
  const visibleRows = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const loadData = async () => {
    setStatusType('loading')
    setStatusMessage('Menghubungkan ke Google Sheets...')
    try {
      const data = await fetchSheetData(sheetConfig)
      if (data && data.length > 1) {
        setHeaders(data[0])
        const cleanRows = data.slice(1).filter((r) => r.some((v) => String(v || '').trim() !== ''))
        setRows(cleanRows)
        setStatusType('ok')
        const now = new Date().toLocaleTimeString('id-ID')
        setStatusMessage(`\u25cf Terhubung ke Google Sheets \u00b7 Diperbarui ${now}`)
      }
    } catch {
      setStatusType('error')
      setStatusMessage('\u25cf Menampilkan data awal (Google Sheets belum terhubung).')
    }
  }

  useEffect(() => {
    loadData()
    const timer = setInterval(loadData, 60000)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheetConfig])

  const toggleExpand = (rowIdx: number, colIdx: number) => {
    const key = `${rowIdx}-${colIdx}`
    setExpandedCells((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#eadbc7] bg-[#fffaf2] shadow-xl">
      {/* Panel Header */}
      <div className="flex flex-col justify-between gap-5 bg-[#4b1519] p-5 text-[#fff5e7] sm:flex-row sm:items-center sm:p-7 border-b border-amber-500/20">
        <div>
          <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-[#e7b665]">
            Direktori {isTenaga ? 'Kebudayaan' : 'Kelembagaan'}
          </p>
          <h3 className="mb-1 font-serif text-2xl sm:text-3xl font-bold text-white">
            Direktori Data {isTenaga ? "Tenaga BANUA\u2019TA" : 'Lembaga Kebudayaan'}
          </h3>
          <p className="text-xs sm:text-sm text-[#e8cdbb]">
            Data terhubung ke Google Spreadsheet resmi dan diperbarui secara berkala.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="min-w-[120px] rounded-xl border-l-4 border-[#e7b665] bg-[#f2dfb9] px-4 py-2.5 text-[#4b1519]">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#67151a]">Total Data</span>
            <strong className="block text-2xl sm:text-3xl font-serif font-bold leading-tight">
              {rows.length.toLocaleString('id-ID')}
            </strong>
          </div>
          <button
            type="button"
            onClick={loadData}
            title="Muat ulang dari Google Sheets"
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#e7b665] hover:text-white transition-colors"
          >
            <RefreshCw size={18} className={statusType === 'loading' ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-7 space-y-4">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5">
          <div className="relative flex-1 max-w-lg">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#b51f2b] pointer-events-none" />
            <input
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dfcfb8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#b51f2b] text-slate-800 placeholder:text-slate-400"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setPage(1)
              }}
              type="search"
              placeholder={isTenaga ? 'Cari nama tenaga, keahlian, bidang...' : 'Cari nama lembaga, kegiatan, alamat...'}
            />
          </div>

          <label className="flex items-center gap-2 whitespace-nowrap text-xs text-[#6c6260] self-end sm:self-auto font-medium">
            Tampilkan
            <select
              className="rounded-lg border border-[#dfcfb8] bg-white px-2.5 py-1.5 font-bold text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#b51f2b]"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value))
                setPage(1)
              }}
            >
              {[5, 10, 25, 50].map((size) => (
                <option key={size} value={size}>
                  {size} data
                </option>
              ))}
            </select>
            per halaman
          </label>
        </div>

        {/* Live Status */}
        <div className="flex items-center gap-2 text-xs font-medium">
          <span
            className={`w-2 h-2 rounded-full shrink-0 ${
              statusType === 'ok' ? 'bg-emerald-600' : statusType === 'loading' ? 'bg-amber-500 animate-ping' : 'bg-red-500'
            }`}
          />
          <span className={statusType === 'ok' ? 'text-emerald-800' : statusType === 'error' ? 'text-red-800' : 'text-amber-800'}>
            {statusMessage}
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-[#e4d4b8] bg-white shadow-sm">
          <table className="w-full border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-[#b51f2b] bg-[#efe1c8] text-[#4a1b1c]">
                <th className="px-3 py-3 w-12 text-center font-bold sticky left-0 bg-[#efe1c8] z-10 border-r border-[#e4d4b8]">
                  No.
                </th>
                {visibleIndices.map((idx) => (
                  <th key={idx} className="px-4 py-3 text-left font-bold min-w-[170px] whitespace-nowrap">
                    {headers[idx]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eee3d0]">
              {visibleRows.length === 0 ? (
                <tr>
                  <td colSpan={visibleIndices.length + 1} className="py-12 text-center text-[#6c6260]">
                    {query ? 'Data yang dicari tidak ditemukan.' : 'Data belum tersedia.'}
                  </td>
                </tr>
              ) : (
                visibleRows.map((row, rowIndex) => {
                  const number = (currentPage - 1) * pageSize + rowIndex + 1
                  return (
                    <tr key={rowIndex} className="even:bg-[#fbf5e9] hover:bg-[#fff0d1] transition-colors">
                      <td className="px-3 py-3 text-center font-mono font-bold text-slate-600 sticky left-0 bg-white/95 z-10 border-r border-[#eee3d0]">
                        {number}
                      </td>
                      {visibleIndices.map((colIdx) => {
                        const val = String(row[colIdx] || '\u2014')
                        const isLong = val.length > 140 || val.includes('\n')
                        const isExpanded = !!expandedCells[`${rowIndex}-${colIdx}`]

                        return (
                          <td key={colIdx} className="px-4 py-3 align-top leading-relaxed text-slate-800">
                            {isLong ? (
                              <div>
                                <div className={!isExpanded ? 'line-clamp-2 max-h-12 overflow-hidden' : ''}>
                                  {val}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => toggleExpand(rowIndex, colIdx)}
                                  className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#b51f2b] hover:underline"
                                >
                                  {isExpanded ? (
                                    <>Sembunyikan <ChevronUp size={12} /></>
                                  ) : (
                                    <>Lihat selengkapnya <ChevronDown size={12} /></>
                                  )}
                                </button>
                              </div>
                            ) : (
                              <div>{val}</div>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filtered.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 pt-4 text-xs text-[#6c6260]">
            <div>
              Menampilkan <strong>{visibleRows.length ? (currentPage - 1) * pageSize + 1 : 0}</strong>{'\u2013'}
              <strong>{Math.min(currentPage * pageSize, filtered.length)}</strong> dari{' '}
              <strong>{filtered.length}</strong> data
            </div>

            <div className="flex flex-wrap items-center gap-1.5 justify-center">
              <button
                type="button"
                className="rounded-lg border border-[#dfcfb8] bg-[#fffdf7] px-3 py-1.5 font-medium text-[#3a2e29] hover:bg-[#b51f2b] hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors"
                disabled={currentPage === 1}
                onClick={() => setPage(currentPage - 1)}
              >
                {'\u2039'} Sebelumnya
              </button>

              {Array.from({ length: pages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === pages || Math.abs(p - currentPage) <= 1)
                .map((p, idx, arr) => {
                  const showEllipsis = idx > 0 && p - arr[idx - 1] > 1
                  return (
                    <div key={p} className="flex items-center gap-1">
                      {showEllipsis && <span className="px-1 text-slate-400">...</span>}
                      <button
                        type="button"
                        onClick={() => setPage(p)}
                        className={`min-w-8 h-8 px-2 rounded-lg font-bold text-xs transition-colors ${
                          p === currentPage
                            ? 'bg-[#b51f2b] text-white shadow-sm'
                            : 'border border-[#dfcfb8] bg-[#fffdf7] text-[#3a2e29] hover:bg-amber-100'
                        }`}
                      >
                        {p}
                      </button>
                    </div>
                  )
                })}

              <button
                type="button"
                className="rounded-lg border border-[#dfcfb8] bg-[#fffdf7] px-3 py-1.5 font-medium text-[#3a2e29] hover:bg-[#b51f2b] hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors"
                disabled={currentPage === pages}
                onClick={() => setPage(currentPage + 1)}
              >
                Berikutnya {'\u203a'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Main Page ───────────────────────────────── */
export default function BanuataPage() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isTenaga = pathname === '/data-tenaga'
  const isLembaga = pathname === '/data-lembaga'

  return (
    <div className="min-h-screen bg-[#f7f1e9] font-sans leading-relaxed text-[#252323]">
      {/* ─── Shared Navbar ─────────────────────────── */}
      <BanuataNavbar />

      {/* ─── Hero Header on Homepage ───────────────── */}
      {isHome && (
        <header
          className="relative flex min-h-[480px] sm:min-h-[540px] items-center bg-cover bg-center text-white shadow-2xl"
          id="beranda"
          style={{
            backgroundImage: `linear-gradient(100deg, rgba(28, 8, 12, .95) 0%, rgba(91, 13, 23, .80) 55%, rgba(35, 7, 12, .4) 100%), url("${banuataHero}")`,
          }}
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Basis Data Tenaga dan Lembaga Kebudayaan Sulawesi Tengah
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Rumah Kita, <span className="text-amber-400">Data Kita,</span><br />
              Budaya Kita.
            </h1>
            <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-amber-100/90 leading-relaxed">
              Basis data digital untuk mengenali, menghimpun, dan memberdayakan tenaga serta lembaga kebudayaan Sulawesi Tengah secara inklusif, terstruktur, dan berkelanjutan.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e7b665] px-5 sm:px-6 py-3 font-bold text-[#351417] shadow-lg hover:bg-[#f4c65f] transition-all hover:scale-105 text-sm sm:text-base"
                href="#deskripsi"
              >
                Kenali BANUA{'\u2019'}TA <span>{'\u2193'}</span>
              </a>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 sm:px-6 py-3 font-bold text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all text-sm sm:text-base"
                to="/data-tenaga"
              >
                Buka Direktori Data
              </Link>
            </div>
            <p className="mt-6 sm:mt-8 text-[10px] sm:text-xs font-medium text-amber-200/80 tracking-wide">
              {'\u2726'} Pendataan inklusif {'\u00b7'} Responsif gender {'\u00b7'} Pemutakhiran berkala {'\u2726'}
            </p>
          </div>
        </header>
      )}

      {/* ─── Beranda Section (Tentang Banuata) ──────── */}
      {isHome && (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f1e9] to-[#f0e8da] px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="beranda-info">
          <div className="mx-auto max-w-6xl">
            {/* Section header */}
            <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-[#e7b665]" />
                <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#b51f2b]">Selamat Datang</p>
                <span className="h-px w-8 bg-[#e7b665]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3c0a10] leading-tight">
                Mengenal <span className="text-[#b51f2b]">BANUA{'\u2019'}TA</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#6c6260] max-w-xl mx-auto leading-relaxed">
                Sistem basis data digital yang membangun fondasi tata kelola kebudayaan Sulawesi Tengah secara transparan, terstruktur, dan berkelanjutan.
              </p>
            </div>

            {/* Info cards grid */}
            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="group rounded-2xl border border-[#eadbc7] bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#b51f2b]/10 text-[#b51f2b] group-hover:bg-[#b51f2b] group-hover:text-white transition-colors duration-300">
                  <Home size={22} />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3c0a10] mb-2">Rumah Kita</h3>
                <p className="text-sm text-[#6c6260] leading-relaxed">
                  BANUA{'\u2019'}TA berasal dari ungkapan bahasa daerah yang bermakna <strong>{'\u201c'}Rumah Kita{'\u201d'}</strong> {'\u2014'} filosofi bahwa tenaga dan lembaga kebudayaan adalah bagian penting dari rumah besar kebudayaan Sulawesi Tengah.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group rounded-2xl border border-[#eadbc7] bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7b665]/15 text-[#b8862d] group-hover:bg-[#e7b665] group-hover:text-[#3c0a10] transition-colors duration-300">
                  <Database size={22} />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3c0a10] mb-2">Data Terstruktur</h3>
                <p className="text-sm text-[#6c6260] leading-relaxed">
                  Menghimpun data tenaga kebudayaan, pelaku seni, komunitas, lembaga adat secara terstruktur mencakup identitas, domisili, keahlian, dan profil kelembagaan.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group rounded-2xl border border-[#eadbc7] bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Users size={22} />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3c0a10] mb-2">Inklusif & Responsif</h3>
                <p className="text-sm text-[#6c6260] leading-relaxed">
                  Mengedepankan prinsip inklusivitas dan responsivitas gender {'\u2014'} mencakup keterlibatan perempuan, generasi muda, penyandang disabilitas, dan komunitas adat.
                </p>
              </div>
            </div>

            {/* Bottom highlight */}
            <div className="mt-8 sm:mt-12 rounded-2xl bg-gradient-to-r from-[#4a1018] to-[#6b1620] p-6 sm:p-8 lg:p-10 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#e7b665] mb-2">Transformasi Digital</p>
                  <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed">
                    BANUA{'\u2019'}TA bukan sekadar pengumpulan data {'\u2014'} melainkan <strong className="text-white">transformasi tata kelola pendataan</strong> agar lebih sistematis, akurat, mudah diperbarui, dan berkelanjutan sebagai dasar perencanaan pembinaan serta perumusan program pemajuan kebudayaan yang tepat sasaran.
                  </p>
                </div>
                <a
                  href="#deskripsi"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e7b665] px-5 py-3 text-sm font-bold text-[#3c0a10] shadow-lg hover:bg-[#f4c65f] transition-all shrink-0 active:scale-95"
                >
                  Pelajari Selengkapnya <span>{'\u2193'}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main>
        {/* Section Deskripsi / Tentang BANUA'TA */}
        {(isHome) && (
          <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="deskripsi">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#b51f2b]">Tentang BANUA{'\u2019'}TA</p>
                <h2 className="my-2.5 font-serif text-3xl sm:text-5xl font-bold text-[#451316]">
                  Rumah Kita, Data Kita, Budaya Kita
                </h2>
                <p className="text-sm sm:text-base text-[#6c6260]">
                  Membangun basis data yang kuat untuk tata kelola kebudayaan Sulawesi Tengah yang inklusif, responsif, dan berkelanjutan.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-12 items-stretch">
                <article className="lg:col-span-8 rounded-2xl border border-[#eadbc7] bg-[#fffaf2] p-6 sm:p-9 shadow-md space-y-4 text-justify text-slate-700 leading-relaxed text-sm sm:text-base">
                  <p>
                    <strong className="text-[#451316] font-serif text-lg">BANUA{'\u2019'}TA</strong> merupakan inisiatif transformasi tata kelola pendataan tenaga dan lembaga kebudayaan di Provinsi Sulawesi Tengah melalui pengelolaan data berbasis digital yang inklusif dan responsif gender.
                  </p>
                  <p>
                    BANUA{'\u2019'}TA berasal dari ungkapan bahasa daerah yang bermakna <strong>{'\u201c'}Rumah Kita{'\u201d'}</strong>. Filosofi ini menegaskan bahwa tenaga dan lembaga kebudayaan merupakan bagian penting dari rumah besar kebudayaan Sulawesi Tengah yang perlu dikenali, didata, dan diberdayakan.
                  </p>
                  <p>
                    BANUA{'\u2019'}TA dirancang untuk menghimpun data tenaga kebudayaan, pelaku seni, komunitas, lembaga adat, dan lembaga kebudayaan lainnya secara terstruktur. Data mencakup identitas dasar, domisili, bidang keahlian atau kegiatan, profil kelembagaan, serta informasi pendukung yang relevan.
                  </p>
                  <p>
                    Pengelolaan data dilaksanakan melalui tahapan pendataan, verifikasi, validasi, penyimpanan, pemanfaatan, dan pemutakhiran secara berkala, dengan memperhatikan persetujuan responden serta perlindungan data pribadi.
                  </p>
                  <p>
                    Pengembangan BANUA{'\u2019'}TA diarahkan melalui pemanfaatan situs web Dinas Kebudayaan Provinsi Sulawesi Tengah sebagai media pengelolaan data digital. Dengan demikian, BANUA{'\u2019'}TA bukan sekadar kegiatan pengumpulan data, melainkan transformasi tata kelola pendataan agar lebih sistematis, akurat, mudah diperbarui, dan berkelanjutan.
                  </p>
                  <p>
                    Data diharapkan menjadi dasar perencanaan pembinaan tenaga dan lembaga kebudayaan, pemetaan potensi budaya, peningkatan kapasitas sumber daya manusia kebudayaan, serta perumusan program pemajuan kebudayaan yang lebih tepat sasaran.
                  </p>
                  <p>
                    BANUA{'\u2019'}TA mengedepankan prinsip inklusivitas dan responsivitas gender agar pendataan dapat menggambarkan keragaman potensi kebudayaan, termasuk keterlibatan perempuan, generasi muda, penyandang disabilitas, dan komunitas adat sesuai kebutuhan serta persetujuan yang relevan.
                  </p>

                  <div className="pt-4 flex flex-wrap gap-2 border-t border-amber-900/10">
                    <span className="rounded-full border border-[#e6c982] bg-[#f3e2be] px-3 py-1.5 text-xs font-bold text-[#5a3426]">
                      Pendataan terstruktur
                    </span>
                    <span className="rounded-full border border-[#e6c982] bg-[#f3e2be] px-3 py-1.5 text-xs font-bold text-[#5a3426]">
                      Perlindungan data pribadi
                    </span>
                    <span className="rounded-full border border-[#e6c982] bg-[#f3e2be] px-3 py-1.5 text-xs font-bold text-[#5a3426]">
                      Inklusif & responsif gender
                    </span>
                    <span className="rounded-full border border-[#e6c982] bg-[#f3e2be] px-3 py-1.5 text-xs font-bold text-[#5a3426]">
                      Pemutakhiran berkala
                    </span>
                  </div>
                </article>

                <aside className="lg:col-span-4 flex flex-col justify-center rounded-2xl border border-[#eadbc7] bg-gradient-to-br from-[#5b111a] to-[#8d1e25] p-8 text-[#fff3dc] shadow-xl">
                  <span className="font-serif text-6xl leading-none text-[#e7b665]">{'\u201c'}</span>
                  <blockquote className="my-4 font-serif text-2xl sm:text-3xl font-bold leading-tight">
                    Rumah Kita,<br />
                    Data Kita,<br />
                    Budaya Kita.
                  </blockquote>
                  <small className="text-[#f2d9bf] text-xs font-sans mt-2">
                    BANUA{'\u2019'}TA {'\u2014'} Basis Data Tenaga dan Lembaga Kebudayaan Dinas Kebudayaan Provinsi Sulawesi Tengah.
                  </small>
                </aside>
              </div>
            </div>
          </section>
        )}

        {/* Section Data Tenaga */}
        {(isTenaga) && (
          <section className="bg-[#f0e5d7] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-[#e2d5c3]" id="tenaga">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#b51f2b]">Direktori Kebudayaan</p>
                <h2 className="my-2 font-serif text-3xl sm:text-4xl font-bold text-[#451316]">
                  Data Tenaga BANUA{'\u2019'}TA
                </h2>
                <p className="text-sm text-[#6c6260]">
                  Gunakan pencarian untuk menemukan data. Kolom yang berisi informasi pribadi sensitif tidak ditampilkan pada tabel publik.
                </p>
              </div>
              <DirectoryPanel type="tenaga" />
            </div>
          </section>
        )}

        {/* Section Data Lembaga */}
        {(isLembaga) && (
          <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-[#e2d5c3]" id="lembaga">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#b51f2b]">Direktori Kelembagaan</p>
                <h2 className="my-2 font-serif text-3xl sm:text-4xl font-bold text-[#451316]">
                  Data Lembaga Kebudayaan
                </h2>
                <p className="text-sm text-[#6c6260]">
                  Data lembaga dihimpun dari spreadsheet resmi dan ditampilkan dengan standar tata kelola data BANUA{'\u2019'}TA.
                </p>
              </div>
              <DirectoryPanel type="lembaga" />
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-[#e7b665] bg-[#171416] px-6 py-12 text-center text-[#f8e9d4]">
        <img className="mx-auto mb-4 h-12 w-auto object-contain" src={banuataLogo} alt="Logo BANUA'TA" />
        <p className="mb-2 font-serif text-lg text-[#e7b665]">Merawat data, menjaga budaya.</p>
        <span className="text-xs text-[#cbb6a5]">
          {'\u00a9'} 2026 BANUA{'\u2019'}TA {'\u2014'} Dinas Kebudayaan Provinsi Sulawesi Tengah {'\u00b7'} Rumah Kita, Data Kita, Budaya Kita.
        </span>
      </footer>
    </div>
  )
}
