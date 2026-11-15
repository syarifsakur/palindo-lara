export interface SheetItem {
  id: string
  name: string
  prefix: string
  headers: string[]
  query: string
  csvUrl: string
  starter: string[][]
  hidePatterns: RegExp[]
}

export const TENAGA_HEADERS = [
  "Nama Lengkap", "Jenis Kelamin", "Pendidikan", "Pekerjaan/Status", "Kelompok Usia",
  "Penyandang Disabilitas", "Membutuhkan Akomodasi (Jika Penyandang Disabilitas)",
  "Kategori Keterwakilan", "Bidang Kebudayaan yang ditekuni", "Status/Peran dalam Kebudayaan",
  "Status Keaktifan", "Tingkat Kompetensi", "Bersedia menjadi Narasumber/Pelatih",
  "Bersedia Terlibat dalam Kegiatan Pemerintah", "Nama Lembaga/Komunitas", "Pengalaman Kegiatan",
  "Kebutuhan Pembinaan", "Jabatan/Peran", "Tahun Bergabung", "Kompetensi Utama (Keahlian)", "Prestasi/Penghargaan"
]

export const LEMBAGA_HEADERS = [
  "Nama Lembaga/Komunitas", "Bentuk Lembaga", "Tahun Berdiri", "Status Lembaga", "Legalitas",
  "Alamat Desa/Kelurahan", "Alamat Kecamatan", "Alamat Kabupaten/Kota", "Media Sosial/Website",
  "Nama Ketua/Pimpinan", "Jumlah Pengurus (Orang)", "Komposisi Anggota Anak-anak (di bawah 17 tahun)",
  "Komposisi Anggota Pemuda (18–30 tahun)", "Komposisi Anggota Dewasa (31–45 tahun)",
  "Komposisi Anggota Dewasa Madya (46–60 tahun)", "Komposisi Anggota Lansia (lebih dari 60 tahun)",
  "Komposisi Anggota Perempuan", "Komposisi Anggota Penyandang Disabilitas", "Komposisi Anggota Masyarakat Adat",
  "Bidang Kebudayaan yang ditekuni", "Kegiatan Utama", "Program Rutin", "Sasaran Kegiatan",
  "Sarana dan Prasarana", "Kebutuhan Pembinaan"
]

export const STARTER_TENAGA: string[][] = [
  TENAGA_HEADERS,
  ["Zulfikar", "Perempuan", "S2", "ASN", "Dewasa Madya (46–60 Tahun)", "Tidak", "Tidak", "Perempuan", "Seni", "Seniman", "Aktif", "Menengah", "Ya", "Ya", "Hasan Bahasyuan Institute", "Pembuatan atribut Hasan Bahasyuan (2008, 2012, 2022, 2023)", "Digitalisasi Kebudayaan", "Direktur", "2008", "—", "Rekor MURI pergelaran Pomonte massal (2011)"],
  ["YUDHI NUGRAHA", "Laki-laki", "S1", "Pegawai BUMN dan Pelaku Seni", "Dewasa (31–45 Tahun)", "Tidak", "Tidak", "Pemuda", "Seni", "Seniman dan Penelitian Kebudayaan", "Aktif", "Menengah", "Ya", "Ya", "DPC PAPPRI SIGI", "Produser album Nyanyian Lembah Sigi (2023 dan 2025); mitra Festival Danau Lindu dan Festival Lestari; pengarah proyek Nyanyian Lembah Sigi Expo 2025 dan LOKALDELI 2026", "Bantuan Sarana dan Prasarana; Fasilitasi Festival/Kegiatan; Digitalisasi Kebudayaan", "Ketua", "2023", "Musik dan pengelolaan program/acara berbasis pelestarian kebudayaan", "—"],
  ["SUAIB, Dg. MANGALA, SS, MM", "Laki-laki", "S2", "ASN", "Dewasa Madya (46–60 Tahun)", "Tidak", "Tidak", "Masyarakat Adat", "Tradisi Lisan, Adat Istiadat, Ritus, Pengetahuan Tradisional, Seni, Bahasa, Permainan Rakyat, Olahraga Tradisional, Cagar Budaya", "Seniman", "Aktif", "Menengah", "Ya", "Ya", "NOSOVADAKA UNDERCOVER", "Mengikuti berbagai kegiatan pemerintah dan komunitas", "Fasilitasi Festival/Kegiatan", "Pembina/Ketua", "2022", "Sastra dan Teater", "—"],
  ["SHERLIANE TRISYE POAI", "Perempuan", "S2", "Pelaku Seni/Budaya", "—", "Tidak", "Tidak", "Perempuan; Sanggar Seni dan Budaya", "Seni, Bahasa, Permainan Rakyat, Olahraga Tradisional", "Pengelola Komunitas", "Aktif", "Menengah", "Ya", "Ya", "Sanggar Seni dan Budaya Tanggoli", "Mengikuti kegiatan seni dan budaya tingkat nasional", "Pelatihan; Bantuan Sarana dan Prasarana; Fasilitasi Festival/Kegiatan; Pendampingan Manajemen; Jejaring dan Kemitraan", "Sekretaris", "2005", "Seni Tari dan penulisan narasi budaya", "Peringkat 1 tingkat provinsi pada Festival Olahraga Tradisional; mewakili Sulawesi Tengah di tingkat nasional"],
  ["Mechdam Alikais Farisy", "Laki-laki", "S1", "Pelaku Seni/Budaya", "Dewasa (31–45 Tahun)", "Tidak", "Tidak", "Pemuda", "Pengetahuan Tradisional, Seni", "Pengelola Komunitas", "Aktif", "Menengah", "Ya", "Ya", "Komunitas Seni Tadulako", "Melaksanakan berbagai produksi karya seni pertunjukan", "Pelatihan; Sertifikasi; Bantuan Sarana dan Prasarana; Fasilitasi Festival/Kegiatan; Digitalisasi Kebudayaan; Pendampingan Manajemen; Promosi dan Publikasi; Jejaring dan Kemitraan", "Anggota", "2005", "Produksi Seni Pertunjukan", "—"],
  ["Al’ifdal", "Laki-laki", "S1", "Pelajar/Mahasiswa", "Pemuda (18–30 Tahun)", "Tidak", "Tidak", "Pemuda", "Seni", "Seniman", "Aktif", "Mahir", "Tidak", "Ya", "Sanggar Seni Pinevali", "Mengikuti berbagai kegiatan kesenian dan mengajar musik di FLS3N", "Sertifikasi; Bantuan Sarana dan Prasarana", "Ketua Umum", "2014", "Musik", "Penyaji musik terbaik Festival Teluk Tomini (2019)"],
  ["Moh. Taufan", "Laki-laki", "S2", "ASN", "Dewasa Madya (46–60 Tahun)", "Tidak", "Tidak", "Pemuda; Budayawan", "Seni, Bahasa, Cagar Budaya", "Budayawan", "Aktif", "Menengah", "Ya", "Ya", "Lembaga Pengembangan Seni Budaya Kailinesia", "Festival budaya tingkat kabupaten, provinsi, dan nasional; Taut Tumbuh Budaya Nasional Kemenbud RI 2026", "Pelatihan; Sertifikasi; Bantuan Sarana dan Prasarana; Fasilitasi Festival/Kegiatan; Digitalisasi Kebudayaan; Pendampingan Manajemen", "Direktur/Ketua Umum", "2016", "Musik tradisi dan teater", "Penerjemah bahasa daerah Balai Bahasa (2025); penerima manfaat Indonesiana (2022)"],
  ["Ade Nuriadin", "Laki-laki", "S2", "Wiraswasta", "Pemuda (18–30 Tahun)", "Tidak", "Tidak", "Masyarakat Adat", "Tradisi Lisan, Adat Istiadat, Ritus, Pengetahuan Tradisional, Seni, Permainan Rakyat, Olahraga Tradisional, Cagar Budaya", "Penelitian Kebudayaan", "Aktif", "Maestro/Ahli", "Ya", "Ya", "Yayasan Tana Sanggamu Sindue", "Penelitian Kutika dan tradisi lisan Desa Kumbasa; produser/sutradara film dokumenter; program kebun organik keluarga", "Fasilitasi Festival/Kegiatan; Digitalisasi Kebudayaan; Promosi dan Publikasi; Jejaring dan Kemitraan", "Ketua", "2020", "Peneliti, pembuat film, praktisi pertanian ramah lingkungan, dan pendamping masyarakat", "The Best Short Film Anti Corruption Film Festival KPK RI (2019); NGO Fellowship Program TaiwanAID (2023)"]
]

export const STARTER_LEMBAGA: string[][] = [
  LEMBAGA_HEADERS,
  ["Atman, S.Pt., M.Si.", "Sanggar Seni", "2010", "Aktif", "SK Pengurusan; Akta Notaris; NPWP", "Desa Pombewe", "Kec. Sigi Biromaru", "Kab. Sigi", "Sanggar Seni Lando", "Atman, S.Pt., M.Si.", "18 Orang", "10", "20", "30", "20", "10", "60", "2", "90", "Adat Istiadat", "Tari Rego, Peaju, dan ritual adat", "Latihan Rego, meaju, dan kakula", "Masyarakat Adat", "Sekretariat", "Bantuan Sarana dan Prasarana"],
  ["Dewan Adat Kabupaten Sigi", "Dewan Adat", "2021", "Aktif", "SK Pengurusan; Akta Notaris; NPWP", "Desa Pombewe", "Kec. Sigi Biromaru", "Kab. Sigi", "—", "Mohamad Rajagunu Datupamusu", "80 orang", "—", "10", "25", "40", "5", "28", "—", "80", "Adat Istiadat", "Pembinaan adat istiadat dan kebudayaan di Kabupaten Sigi", "Pembinaan", "Masyarakat Adat", "Sekretariat", "Penguatan Kelembagaan; Bantuan Sarana dan Prasarana; Bantuan Kegiatan; Legalitas; Digitalisasi; Promosi; Jejaring dan Kemitraan"],
  ["Magulili Institute", "Organisasi Profesi Kebudayaan", "2021", "Aktif", "SK Pengurusan; Akta Notaris; NPWP", "Desa Kabobona", "Dolo", "Sigi", "Magulili Institute", "Agustam", "9", "Tidak ada", "—", "9", "Tidak ada", "Tidak ada", "3", "Tidak ada", "Tidak ada", "Seni", "Pelestarian kesenian tradisi", "Pelestarian musik karambangan", "Remaja, Pemuda, Dewasa, Lansia, Masyarakat Umum", "Sekretariat; Sanggar/Studio; Peralatan Kesenian", "Bantuan Sarana dan Prasarana; Bantuan Kegiatan; Jejaring dan Kemitraan"],
  ["Yayasan Tadulakota Sulawesi Tengah", "Yayasan Kebudayaan", "1993", "Aktif", "SK Pengurusan; Akta Notaris; AHU; NIB; NPWP", "Lolu Utara", "Palu Timur", "Palu", "Yayasan Tadulakota", "Hapri Ika Poigi", "5", "13", "5", "3", "7", "2", "7", "1", "0", "Seni", "Pengembangan budaya lokal dalam berbagai bentuk karya, khususnya kesenian", "Kajian dan penciptaan karya berbasis budaya lokal serta pertunjukan seni", "Remaja, Pemuda, Dewasa, Masyarakat Umum", "Sekretariat; Peralatan Dokumentasi; Sarana Digital", "Bantuan Sarana dan Prasarana; Bantuan Kegiatan"],
  ["Sanggar Seni Pinevali", "Sanggar Seni", "2014", "Aktif", "SK Pengurusan", "Desa Bomba", "Marawola", "Sigi", "Instagram @Pinevali_art", "Al’ifdal", "15", "6 orang", "9 orang", "—", "—", "—", "5 orang", "—", "—", "Seni", "Presentasi karya", "Presentasi karya dan latihan rutin", "Pemuda", "Sekretariat", "Bantuan Sarana dan Prasarana; Bantuan Legalitas; Digitalisasi dan Dokumentasi"],
  ["LPSB Kailinesia", "Sanggar Seni", "2016", "Aktif", "Akta Notaris", "Toboli", "Parigi Utara", "Parigi Moutong", "Instagram/Facebook: lpsb_kailinesia_", "Mohamad Ziadatul Khair", "15", "10", "50", "10", "5", "—", "20", "2", "—", "Seni", "Kesenian tradisional", "Latihan kesenian", "Anak-anak, Remaja, Pemuda, Dewasa, Masyarakat Umum", "Sekretariat; Sanggar/Studio; Peralatan Kesenian; Dokumentasi; Sarana Digital", "Penguatan Kelembagaan; Pelatihan Manajemen; Sarana dan Prasarana; Kegiatan; Legalitas; Digitalisasi; Promosi; Jejaring"],
  ["Sanggar Seni Mutianggaluku", "Sanggar Seni", "2017", "Aktif", "SK Pengurusan", "Luku", "Dolo Barat", "Sigi", "Komunitas Sanggar Seni Mutianggaluku", "Sadri, S.Pd., M.Pd.", "50 orang", "15 orang", "20", "15", "—", "—", "30", "20", "—", "Seni", "Musik, lagu, dan tari", "Musik, lagu, dan tari", "Remaja, Pemuda, Dewasa", "Sekretariat; Peralatan Kesenian; Sarana Digital", "Penguatan Kelembagaan; Pelatihan Manajemen; Sarana dan Prasarana; Kegiatan; Legalitas; Digitalisasi"],
  ["Lokanatha", "Sanggar Seni", "2024", "Aktif", "SK Pengurusan; Akta Notaris; NPWP", "Taliabo", "Sausu", "Parigi Moutong", "Facebook", "I Made Sukado", "3 orang", "Tidak ada", "10 orang", "27 orang", "7 orang", "Tidak ada", "Tidak ada", "Tidak ada", "40 orang", "Seni", "Upacara adat", "Latihan dua kali seminggu", "Anak-anak, Remaja, Pemuda, Dewasa", "Sanggar/Studio; Peralatan Kesenian", "Penguatan Kelembagaan; Pelatihan Manajemen; Sarana dan Prasarana; Kegiatan; Legalitas"]
]

export const SHEETS_DEF: Record<string, SheetItem> = {
  tenaga: {
    id: "1fS4bNizIUeP1hAL1VCYpR1cVd59PaZ41CpWMredqRW4",
    name: "Data Tenaga",
    prefix: "bd",
    headers: TENAGA_HEADERS,
    query: "select C,F,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AB,AC",
    csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2NK7ooob1Ixrq9lyTyrbeIFxl9fNEl8wd4nbA3TUWmUGbazNINx_sod_M80ui1CLRm0ERS9IpTgmY/pub?output=csv",
    starter: STARTER_TENAGA,
    hidePatterns: [/timestamp/i, /nik/i, /nisn/i, /tempat.*tanggal.*lahir/i, /tanggal.*lahir/i, /tempat\s*lahir/i, /alamat/i, /nomor.*hp/i, /no\.?\s*hp/i, /whatsapp/i, /telepon/i, /email/i]
  },
  lembaga: {
    id: "1qNLNjwVEUmRRP-kbc_jxQi9BlHQZmejT5lJaYneXkcM",
    name: "Data Lembaga",
    prefix: "bl",
    headers: LEMBAGA_HEADERS,
    query: "select B,C,D,E,F,G,H,I,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA",
    csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQbk2s7eKYDloZNyggw9PVUgMk0EDqe32QvI048VjM5BAx7L8exLlOawyLSEDlDdE5SkW9AsRLXkPs7/pub?output=csv",
    starter: STARTER_LEMBAGA,
    hidePatterns: [/timestamp/i, /nomor.*hp/i, /no\.?\s*hp/i, /whatsapp/i, /email/i]
  }
}

function parseCSV(text: string): string[][] {
  text = String(text || "").replace(/^\uFEFF/, "")
  const out: string[][] = []
  let row: string[] = []
  let cell = ""
  let quoted = false

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (ch === '"') {
      if (quoted && text[i + 1] === '"') {
        cell += '"'
        i++
      } else {
        quoted = !quoted
      }
    } else if (ch === "," && !quoted) {
      row.push(cell)
      cell = ""
    } else if ((ch === "\n" || ch === "\r") && !quoted) {
      if (ch === "\r" && text[i + 1] === "\n") i++
      row.push(cell)
      if (row.some(v => v.trim() !== "")) out.push(row)
      row = []
      cell = ""
    } else {
      cell += ch
    }
  }
  if (cell !== "" || row.length) {
    row.push(cell)
    if (row.some(v => v.trim() !== "")) out.push(row)
  }
  return out
}

function requestJsonp(d: SheetItem, variant: { gid: string | null; headers: string }): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    const callbackName = "__banua_" + d.prefix + "_" + Date.now() + "_" + Math.floor(Math.random() * 1000000)
    const script = document.createElement("script")
    let finished = false

    const cleanup = () => {
      if (finished) return
      finished = true
      clearTimeout(timer)
      script.remove()
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (window as any)[callbackName]
      } catch {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any)[callbackName] = undefined
      }
    }

    const timer = setTimeout(() => {
      cleanup()
      reject(new Error("Timeout Google Sheets"))
    }, 12000)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any)[callbackName] = function (payload: any) {
      if (finished) return
      try {
        if (!payload || payload.status !== "ok" || !payload.table) {
          const detail = payload?.errors?.[0]?.detailed_message || payload?.errors?.[0]?.reason
          throw new Error(detail || "Respons tabel Google tidak valid")
        }
        const table = payload.table
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const rows = (table.rows || []).map((row: any) =>
          d.headers.map((_, i) => {
            const cell = row?.c?.[i]
            if (!cell) return ""
            if (cell.f !== null && cell.f !== undefined && cell.f !== "") return String(cell.f)
            return cell.v === null || cell.v === undefined ? "" : String(cell.v)
          })
        ).filter((row: string[]) => row.some(v => String(v).trim() !== ""))

        if (!rows.length) throw new Error("Data spreadsheet kosong")
        cleanup()
        resolve([d.headers, ...rows])
      } catch (err) {
        cleanup()
        reject(err)
      }
    }

    const tqx = "out:json;responseHandler:" + callbackName
    const params = new URLSearchParams()
    params.set("tqx", tqx)
    if (variant.gid !== null) params.set("gid", variant.gid)
    params.set("headers", variant.headers)
    params.set("tq", d.query.replace(/,/g, ", "))

    script.async = true
    script.src = "https://docs.google.com/spreadsheets/d/" + d.id + "/gviz/tq?" + params.toString()
    script.onerror = () => {
      cleanup()
      reject(new Error("Gagal memuat JSONP"))
    }
    document.head.appendChild(script)
  })
}

async function tryPublishedCsv(d: SheetItem): Promise<string[][]> {
  const urls = [
    `https://docs.google.com/spreadsheets/d/${d.id}/export?format=csv&gid=0`,
    d.csvUrl
  ]
  const errors: string[] = []
  for (const url of urls) {
    try {
      const res = await fetch(url + (url.includes("?") ? "&" : "?") + "_banua=" + Date.now(), {
        cache: "no-store",
        mode: "cors",
        credentials: "omit"
      })
      if (!res.ok) throw new Error("HTTP " + res.status)
      const text = await res.text()
      if (!text.trim() || /^\s*</.test(text)) throw new Error("Respons bukan CSV")
      const rows = parseCSV(text)
      if (rows.length < 2) throw new Error("CSV kosong")

      const allHeaders = rows[0].map(v => String(v || "").trim())
      const normHeader = (val: string) =>
        String(val || "").normalize("NFKC").toLowerCase().replace(/[\s_]+/g, "").replace(/[^a-z0-9]/g, "")

      const idx = d.headers.map(h => allHeaders.findIndex(x => normHeader(x) === normHeader(h)))
      const selected = [
        d.headers,
        ...rows.slice(1).filter(r => r.some(v => String(v || "").trim() !== "")).map(r => idx.map(i => (i >= 0 ? r[i] || "" : "")))
      ]
      return selected
    } catch (e: unknown) {
      errors.push(e instanceof Error ? e.message : String(e))
    }
  }
  throw new Error(errors.join("; "))
}

export async function fetchSheetData(def: SheetItem): Promise<string[][]> {
  try {
    return await requestJsonp(def, { gid: "0", headers: "1" })
  } catch {
    try {
      return await requestJsonp(def, { gid: null, headers: "1" })
    } catch {
      return await tryPublishedCsv(def)
    }
  }
}
