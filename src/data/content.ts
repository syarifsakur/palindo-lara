import { Landmark, Sparkles, Users, History, Palette, Compass } from 'lucide-react'

const imageBase = 'https://kebudayaan.sultengprov.go.id'

export interface CollectionItem {
  id: string
  category: 'cagar-budaya' | 'wbtb' | 'ruang-adat'
  eyebrow: string
  title: string
  description: string
  image: string
  icon: typeof Landmark
  className?: string
  location?: string
  year?: string
  significance?: string
}

export const collections: CollectionItem[] = [
  {
    id: 'cagar-budaya',
    category: 'cagar-budaya',
    eyebrow: '01 / Situs & Sejarah',
    title: 'Cagar Budaya',
    description:
      'Jejak penting sejarah Sulawesi Tengah dalam situs, bangunan, struktur, benda, dan kawasan yang dilindungi.',
    image: `${imageBase}/images/0/25255256/Desaintanpajudul-bhgL4ZHUQ2t3D97AtCBCvw.png`,
    icon: Landmark,
    className: 'collection-card--large',
    location: 'Lembah Bada, Besoa, & Napu',
    year: 'Megalitik ~3000 SM',
    significance: 'Monumen batu megalitik tertua di Asia Tenggara',
  },
  {
    id: 'wbtb',
    category: 'wbtb',
    eyebrow: '02 / Tradisi & Ekspresi',
    title: 'Warisan Budaya Takbenda',
    description:
      'Ragam tradisi, seni, bahasa, ritus, pengetahuan, dan keterampilan yang terus hidup di tengah masyarakat.',
    image: `${imageBase}/images/0/25259425/WBTBSampul-cz0vj-vtybAc0GfotphfbQ.png`,
    icon: Sparkles,
    className: '',
    location: 'Seluruh Wilayah Sulteng',
    year: 'Diwariskan Turun-Temurun',
    significance: 'Ekspresi lisan, adat istiadat, dan seni pertunjukan khas',
  },
  {
    id: 'ruang-adat',
    category: 'ruang-adat',
    eyebrow: '03 / Komunitas',
    title: 'Ruang Adat',
    description:
      'Wilayah adat, sanggar seni, komunitas budaya, dan pelaku kebudayaan Sulawesi Tengah.',
    image: `${imageBase}/images/0/25259430/Ruangadatsampul-yprIhMCr9WTxs4tpEjpM4Q.png`,
    icon: Users,
    className: '',
    location: '13 Kabupaten / Kota',
    year: 'Aktif Berkesinambungan',
    significance: 'Wadah pemangku adat dan generasi muda melestarikan pusaka',
  },
]

export const detailedArtifacts: CollectionItem[] = [
  {
    id: 'palindo',
    category: 'cagar-budaya',
    eyebrow: 'Situs Megalitik',
    title: 'Arca Palindo Lara',
    description: 'Arca batu setinggi 4,5 meter di Lembah Bada dengan ekspresi senyum misterius, peninggalan zaman prasejarah megalitikum.',
    image: `${imageBase}/images/0/25255256/Desaintanpajudul-bhgL4ZHUQ2t3D97AtCBCvw.png`,
    icon: History,
    location: 'Desa Sepe, Lembah Bada, Poso',
    year: 'Abad ke-14 SM',
    significance: 'Ikon peradaban batu terbesar di Sulawesi Tengah',
  },
  {
    id: 'souraja',
    category: 'cagar-budaya',
    eyebrow: 'Arsitektur Tradisional',
    title: 'Banua Mbaso (Souraja)',
    description: 'Istana rumah panggung kayu khas bangsawan Kaili yang dibangun abad ke-19 dengan tiang kokoh tanpa paku besi.',
    image: `${imageBase}/images/0/25259425/WBTBSampul-cz0vj-vtybAc0GfotphfbQ.png`,
    icon: Landmark,
    location: 'Kampung Baru, Kota Palu',
    year: '1892 M',
    significance: 'Pusat pemerintahan kerajaan Palu masa lampau',
  },
  {
    id: 'tari-dero',
    category: 'wbtb',
    eyebrow: 'Seni Pertunjukan',
    title: 'Tari Dero',
    description: 'Tarian melingkar bergandengan tangan suku Pamona saat panen raya Padungku dan upacara adat kebersamaan.',
    image: `${imageBase}/images/0/25262157/Karnavalbudaya-HyNbY4lWzvrqkQX6iMgtPQ.png`,
    icon: Sparkles,
    location: 'Kabupaten Poso',
    year: 'Tradisi Leluhur',
    significance: 'Simbol persaudaraan, rekonsiliasi, dan syukur',
  },
  {
    id: 'tenun-donggala',
    category: 'wbtb',
    eyebrow: 'Kemahiran Kerajinan',
    title: 'Kain Tenun Donggala',
    description: 'Seni tenun sutra tradisional bermotif bunga subuki dan bomba yang sarat filosofi kehormatan dan keanggunan.',
    image: `${imageBase}/images/0/25262096/Desaintanpajudul-rZi7F2mErm_ooAQe9lxj9Q.png`,
    icon: Palette,
    location: 'Kabupaten Donggala',
    year: 'Abad ke-17 M',
    significance: 'Karya adiluhung busana adat kebesaran bangsawan',
  },
  {
    id: 'kalamba',
    category: 'cagar-budaya',
    eyebrow: 'Benda Cagar Budaya',
    title: 'Kalamba Pokekea',
    description: 'Tong batu monolit raksasa bertutup relief wajah manusia yang difungsikan sebagai wadah pemakaman kuno bangsawan Lore.',
    image: `${imageBase}/images/0/25262200/tempayantulang-5GMd8j9luR0s9Q5i-nt8Ag.png`,
    icon: Compass,
    location: 'Lembah Besoa, Poso',
    year: '2500 SM',
    significance: 'Teknologi pahat batu prasejarah yang mengagumkan',
  },
  {
    id: 'komunitas-kaili',
    category: 'ruang-adat',
    eyebrow: 'Lembaga Adat',
    title: 'Libu Nu Ada Kaili',
    description: 'Musyawarah adat tertinggi masyarakat Kaili yang menjaga hukum adat Sintuwu Maroso dan kelestarian tanah ulayat.',
    image: `${imageBase}/images/0/25259430/Ruangadatsampul-yprIhMCr9WTxs4tpEjpM4Q.png`,
    icon: Users,
    location: 'Lembah Palu & Sigi',
    year: 'Tradisi Hidup',
    significance: 'Pilar perdamaian dan keharmonisan sosial masyarakat',
  },
]

export const news = [
  {
    id: 'fkpa',
    category: 'Kegiatan Adat',
    date: '14 APR 2026',
    title: 'Pelantikan FKPA Sulteng',
    description: 'Forum Komunikasi Pemangku Adat Sulawesi Tengah resmi dilantik untuk memperkuat sinergi pelestarian kearifan lokal 13 kabupaten/kota.',
    content: 'Pemerintah Provinsi Sulawesi Tengah melalui Dinas Kebudayaan secara resmi mengukuhkan kepengurusan FKPA periode 2026–2031. Acara ini dihadiri oleh para tetua adat dari berbagai etnis, termasuk Kaili, Kulawi, Pamona, Mori, Saluan, Banggai, dan Tolitoli.',
    image: `${imageBase}/images/0/25262096/Desaintanpajudul-rZi7F2mErm_ooAQe9lxj9Q.png`,
    readTime: '3 menit baca',
  },
  {
    id: 'karnaval',
    category: 'Festival',
    date: '13 APR 2026',
    title: 'Karnaval Budaya Sulteng 2026',
    description: 'Karnaval budaya dalam rangka HUT ke-62 Sulawesi Tengah berlangsung meriah dengan parade pakaian adat dan pertunjukan musik tradisional.',
    content: 'Ribuan masyarakat memadati jalan-jalan protokol Kota Palu untuk menyaksikan kemegahan busana adat dan tarian kolosal persembahan seluruh kontingen kabupaten/kota se-Sulawesi Tengah.',
    image: `${imageBase}/images/0/25262157/Karnavalbudaya-HyNbY4lWzvrqkQX6iMgtPQ.png`,
    readTime: '4 menit baca',
  },
  {
    id: 'odcb-poso',
    category: 'Penemuan Arkeologi',
    date: '10 APR 2026',
    title: 'Temuan ODCB Terbaru di Kab. Poso',
    description: 'Objek diduga cagar budaya berupa tempayan batu dan fragmen gerabah kuno ditemukan tim riset di kawasan pegunungan Lore.',
    content: 'Balai Pelestarian Kebudayaan bersama Dinas Kebudayaan Sulteng telah mengirim tim arkeolog untuk melakukan ekskavasi awal dan pencatatan inventarisasi guna perlindungan situs tersebut.',
    image: `${imageBase}/images/0/25262200/tempayantulang-5GMd8j9luR0s9Q5i-nt8Ag.png`,
    readTime: '5 menit baca',
  },
  {
    id: 'revitalisasi-souraja',
    category: 'Konservasi',
    date: '02 APR 2026',
    title: 'Revitalisasi Kompleks Rumah Adat Souraja Palu',
    description: 'Program restorasi tahap dua Rumah Adat Souraja difokuskan pada penguatan struktur tiang kayu ulin dan penataan museum interaktif.',
    content: 'Dinas Kebudayaan memastikan pemugaran dilakukan sesuai kaidah pemugaran cagar budaya tanpa mengubah arsitektur asli maupun ornamen ukiran tradisional Kaili.',
    image: `${imageBase}/images/0/25255256/Desaintanpajudul-bhgL4ZHUQ2t3D97AtCBCvw.png`,
    readTime: '4 menit baca',
  },
]

export const marqueeItems = [
  'Lembah Bada', 'Tari Dero', 'Megalitik Lore', 'Pantai Togean',
  'Suku Kaili', 'Kain Donggala', 'Festival Danau Poso', 'Patung Palindo',
  'Situs Pokekea', 'Rumah Souraja', 'Suku Saluan', 'Kain Bomba',
  'Lembah Bada', 'Tari Dero', 'Megalitik Lore', 'Pantai Togean',
  'Suku Kaili', 'Kain Donggala', 'Festival Danau Poso', 'Patung Palindo',
]
