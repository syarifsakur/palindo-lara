import { useState } from 'react'
import BanuataDeskripsi from '../components/home/BanuataDeskripsi'
import BanuataHero from '../components/home/BanuataHero'
import BanuataTable from '../components/home/BanuataTable'
import CollectionsSection from '../components/home/CollectionsSection'
import FeatureSection from '../components/home/FeatureSection'
import MarqueeSection from '../components/home/MarqueeSection'
import NewsSection from '../components/home/NewsSection'
import { SHEETS_DEF } from '../services/banuataData'

export default function HomePage() {
  const [totalTenaga, setTotalTenaga] = useState<number>(SHEETS_DEF.tenaga.starter.length - 1)
  const [totalLembaga, setTotalLembaga] = useState<number>(SHEETS_DEF.lembaga.starter.length - 1)

  return (
    <>
      {/* BANUA’TA Hero Section */}
      <BanuataHero totalTenaga={totalTenaga} totalLembaga={totalLembaga} />

      {/* BANUA’TA Deskripsi & Filosofi */}
      <BanuataDeskripsi />

      {/* BANUA’TA Direktori Data Tenaga */}
      <BanuataTable
        sheetConfig={SHEETS_DEF.tenaga}
        sectionId="tenaga"
        kicker="Direktori Kebudayaan Sulawesi Tengah"
        title="Data Tenaga BANUA’TA"
        description="Gunakan pencarian untuk menemukan data tenaga kebudayaan. Kolom yang berisi informasi pribadi sensitif dilindungi dan tidak ditampilkan pada tabel publik."
        onCountChange={setTotalTenaga}
      />

      {/* BANUA’TA Direktori Data Lembaga */}
      <BanuataTable
        sheetConfig={SHEETS_DEF.lembaga}
        sectionId="lembaga"
        kicker="Direktori Kelembagaan Sulawesi Tengah"
        title="Data Lembaga Kebudayaan"
        description="Data lembaga dihimpun dari spreadsheet resmi dan disajikan dengan standar tata kelola data BANUA’TA."
        onCountChange={setTotalLembaga}
      />

      {/* Objek Pemajuan & Warisan Budaya */}
      <CollectionsSection />

      {/* Fitur & Cerita Budaya */}
      <FeatureSection />

      {/* Marquee Daerah & Budaya */}
      <MarqueeSection />

      {/* Berita & Pembaruan Kebudayaan */}
      <NewsSection />
    </>
  )
}
