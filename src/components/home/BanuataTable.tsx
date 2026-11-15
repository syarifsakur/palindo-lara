import { ChevronDown, ChevronUp, RefreshCw, Search } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { fetchSheetData, type SheetItem } from '../../services/banuataData'

interface BanuataTableProps {
  sheetConfig: SheetItem
  sectionId: string
  kicker: string
  title: string
  description: string
  onCountChange?: (count: number) => void
}

export default function BanuataTable({
  sheetConfig,
  sectionId,
  kicker,
  title,
  description,
  onCountChange
}: BanuataTableProps) {
  // State for raw rows [ [header1, header2...], [row1...], [row2...] ]
  const [headers, setHeaders] = useState<string[]>(sheetConfig.headers)
  const [rows, setRows] = useState<string[][]>(sheetConfig.starter.slice(1))
  const [statusMessage, setStatusMessage] = useState<string>('Menampilkan data awal · sedang menyinkronkan...')
  const [statusType, setStatusType] = useState<'loading' | 'ok' | 'error'>('loading')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(5)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [expandedCells, setExpandedCells] = useState<Record<string, boolean>>({})

  // Determine which column indices are visible based on hidePatterns
  const visibleIndices = useMemo(() => {
    return headers
      .map((h, i) => ({ h, i }))
      .filter(({ h }) => !sheetConfig.hidePatterns.some((re) => re.test(h)))
      .map(({ i }) => i)
  }, [headers, sheetConfig.hidePatterns])

  // Filtered rows based on search
  const filteredRows = useMemo(() => {
    if (!searchQuery.trim()) return rows
    const q = searchQuery.toLowerCase().trim()
    return rows.filter((row) =>
      visibleIndices.some((idx) => {
        const val = row[idx] || ''
        return val.toLowerCase().includes(q)
      })
    )
  }, [rows, searchQuery, visibleIndices])

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize))
  const paginatedRows = useMemo(() => {
    const page = Math.max(1, Math.min(currentPage, totalPages))
    const start = (page - 1) * pageSize
    return filteredRows.slice(start, start + pageSize)
  }, [filteredRows, currentPage, totalPages, pageSize])

  // Fetch live Google Sheets data
  const loadData = async () => {
    setStatusType('loading')
    setStatusMessage('Menghubungkan ke Google Sheets...')
    try {
      const data = await fetchSheetData(sheetConfig)
      if (data && data.length > 1) {
        const newHeaders = data[0]
        const newRows = data.slice(1).filter((r) => r.some((v) => String(v || '').trim() !== ''))
        setHeaders(newHeaders)
        setRows(newRows)
        setStatusType('ok')
        const now = new Date().toLocaleTimeString('id-ID')
        setStatusMessage(`● Terhubung ke Google Sheets · Diperbarui ${now}`)
        if (onCountChange) onCountChange(newRows.length)
      }
    } catch {
      setStatusType('error')
      setStatusMessage('● Data offline ditampilkan. Menunggu koneksi langsung ke Google Sheets.')
      if (onCountChange) onCountChange(rows.length)
    }
  }

  useEffect(() => {
    loadData()
    const timer = setInterval(loadData, 60000)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheetConfig])

  const handleSearchChange = (val: string) => {
    setSearchQuery(val)
    setCurrentPage(1)
  }

  const handlePageSizeChange = (val: number) => {
    setPageSize(val)
    setCurrentPage(1)
  }

  // Toggle cell expansion
  const toggleExpand = (rowIdx: number, colIdx: number) => {
    const key = `${rowIdx}-${colIdx}`
    setExpandedCells((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const startRecord = (currentPage - 1) * pageSize + 1
  const endRecord = Math.min(currentPage * pageSize, filteredRows.length)

  return (
    <section id={sectionId} className="py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-900/10 bg-[#f7f1e9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-amber-700 mb-1.5">{kicker}</p>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#451316]">{title}</h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm">{description}</p>
        </div>

        {/* Main Panel */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-900/15 overflow-hidden">
          {/* Panel Head */}
          <div className="bg-[#451316] text-white px-6 py-5 flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/20">
            <div>
              <h3 className="font-serif font-bold text-lg text-amber-100">{title}</h3>
              <p className="text-xs text-amber-200/70">Terhubung langsung ke basis data terpadu Provinsi Sulawesi Tengah</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10 text-center">
                <span className="text-xs text-amber-200/70 block">Total Data:</span>
                <span className="font-bold text-lg text-amber-300 font-serif">
                  {rows.length.toLocaleString('id-ID')}
                </span>
              </div>
              <button
                type="button"
                onClick={loadData}
                title="Muat ulang data dari Google Sheets"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 hover:text-white transition-colors"
                aria-label="Segarkan data"
              >
                <RefreshCw size={16} className={statusType === 'loading' ? 'animate-spin' : ''} />
              </button>
            </div>
          </div>

          {/* Panel Body */}
          <div className="p-4 sm:p-6 space-y-4">
            {/* Toolbar: Search & Page Size */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Cari nama, bidang, keahlian, atau data lainnya..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-slate-50 text-slate-800"
                />
              </div>

              {/* Page size dropdown */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 self-end sm:self-auto">
                <label htmlFor={`${sheetConfig.prefix}-size`}>Tampilkan</label>
                <select
                  id={`${sheetConfig.prefix}-size`}
                  value={pageSize}
                  onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                  className="rounded-lg border border-slate-200 py-1.5 px-2.5 text-xs sm:text-sm bg-slate-50 font-medium text-slate-700 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value={5}>5 data</option>
                  <option value={10}>10 data</option>
                  <option value={25}>25 data</option>
                  <option value={50}>50 data</option>
                </select>
                <span>per halaman</span>
              </div>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 text-xs">
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${
                  statusType === 'ok' ? 'bg-emerald-500' : statusType === 'loading' ? 'bg-amber-500 animate-ping' : 'bg-rose-500'
                }`}
              />
              <span className={statusType === 'ok' ? 'text-emerald-700 font-medium' : statusType === 'error' ? 'text-rose-700' : 'text-amber-700'}>
                {statusMessage}
              </span>
            </div>

            {/* Table wrapper with custom scroll */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-inner">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#451316]/5 border-b border-slate-200 text-[#451316] font-serif font-bold">
                    <th className="py-3 px-3 w-12 text-center sticky left-0 bg-amber-50/90 backdrop-blur z-10 border-r border-slate-200">
                      No.
                    </th>
                    {visibleIndices.map((idx) => (
                      <th key={idx} className="py-3 px-4 min-w-[160px] whitespace-nowrap font-semibold">
                        {headers[idx]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {paginatedRows.length === 0 ? (
                    <tr>
                      <td colSpan={visibleIndices.length + 1} className="py-12 text-center text-slate-400">
                        {searchQuery ? 'Data yang dicari tidak ditemukan.' : 'Data belum tersedia.'}
                      </td>
                    </tr>
                  ) : (
                    paginatedRows.map((row, rowIdx) => {
                      const absoluteRowNumber = (currentPage - 1) * pageSize + rowIdx + 1
                      return (
                        <tr
                          key={rowIdx}
                          className="hover:bg-amber-50/40 transition-colors odd:bg-white even:bg-slate-50/50"
                        >
                          <td className="py-3 px-3 text-center font-mono text-slate-500 font-semibold sticky left-0 bg-white/90 backdrop-blur z-10 border-r border-slate-100">
                            {absoluteRowNumber}
                          </td>
                          {visibleIndices.map((colIdx) => {
                            const val = String(row[colIdx] || '—')
                            const isLong = val.length > 130 || val.includes('\n')
                            const isExpanded = !!expandedCells[`${rowIdx}-${colIdx}`]

                            return (
                              <td key={colIdx} className="py-3 px-4 align-top leading-relaxed">
                                {isLong ? (
                                  <div>
                                    <div
                                      className={`text-slate-800 transition-all ${
                                        !isExpanded ? 'line-clamp-2 max-h-12 overflow-hidden' : ''
                                      }`}
                                    >
                                      {val}
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => toggleExpand(rowIdx, colIdx)}
                                      className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 hover:text-amber-900 focus:outline-none"
                                    >
                                      {isExpanded ? (
                                        <>Sembunyikan <ChevronUp size={12} /></>
                                      ) : (
                                        <>Lihat selengkapnya <ChevronDown size={12} /></>
                                      )}
                                    </button>
                                  </div>
                                ) : (
                                  <div className="text-slate-800">{val}</div>
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

            {/* Pagination Controls */}
            {filteredRows.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <div>
                  Menampilkan <strong className="text-slate-800">{startRecord}</strong>–
                  <strong className="text-slate-800">{endRecord}</strong> dari{' '}
                  <strong className="text-slate-800">{filteredRows.length}</strong> data
                </div>
                <div className="flex items-center gap-1.5 flex-wrap justify-center">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-medium hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    ‹ Sebelumnya
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
                    .map((p, idx, arr) => {
                      const showEllipsisBefore = idx > 0 && p - arr[idx - 1] > 1
                      return (
                        <div key={p} className="flex items-center gap-1">
                          {showEllipsisBefore && <span className="px-1 text-slate-400">...</span>}
                          <button
                            type="button"
                            onClick={() => setCurrentPage(p)}
                            className={`min-w-8 h-8 px-2 rounded-lg font-medium transition-colors text-xs ${
                              currentPage === p
                                ? 'bg-amber-600 text-white font-bold shadow-sm'
                                : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            {p}
                          </button>
                        </div>
                      )
                    })}

                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-medium hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    Berikutnya ›
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
