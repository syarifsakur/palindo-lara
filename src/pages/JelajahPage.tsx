import { useState } from 'react'
import { ArrowUpRight, Search, MapPin, Calendar, Award, X, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { detailedArtifacts, type CollectionItem } from '../data/content'

const categories = [
  { key: 'all', label: 'Semua Koleksi' },
  { key: 'cagar-budaya', label: 'Cagar Budaya' },
  { key: 'wbtb', label: 'Warisan Takbenda' },
  { key: 'ruang-adat', label: 'Ruang Adat' },
]

export default function JelajahPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null)

  const filteredItems = detailedArtifacts.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.location && item.location.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="page-shell">
      {/* ─── Hero Header ─── */}
      <section className="page-hero">
        <div className="page-hero-inner fade-up">
          <div className="section-label">02 / JELAJAH BUDAYA</div>
          <h1>
            Koleksi & <em>Warisan Pusaka</em>
          </h1>
          <p className="page-hero-copy">
            Menelusuri warisan agung Sulawesi Tengah—dari monumen batu megalitik Lembah Lore,
            tenun pusaka berfilosofi luhur, hingga ruang adat yang hidup dan lestari.
          </p>

          {/* Search & Filter Bar */}
          <div className="explore-controls">
            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Cari cagar budaya, tradisi, atau lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="clear-search"
                  onClick={() => setSearchQuery('')}
                  aria-label="Hapus pencarian"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`filter-tab ${activeCategory === cat.key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Artifacts Grid ─── */}
      <section className="collections-section" style={{ paddingTop: 30 }}>
        {filteredItems.length === 0 ? (
          <div className="empty-state fade-up">
            <Sparkles size={36} color="var(--gold)" />
            <h3>Tidak ada koleksi yang cocok</h3>
            <p>Coba kata kunci pencarian lain atau pilih kategori yang berbeda.</p>
            <button
              className="button button--primary"
              onClick={() => {
                setActiveCategory('all')
                setSearchQuery('')
              }}
            >
              Tampilkan Semua Koleksi
            </button>
          </div>
        ) : (
          <div className="collection-grid">
            {filteredItems.map(({ icon: Icon, ...item }, index) => (
              <article
                className={`collection-card fade-up fade-up-delay-${(index % 3) + 1}`}
                key={item.id}
                onClick={() => setSelectedItem({ icon: Icon, ...item })}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="card-overlay" />
                <div className="collection-content">
                  <span className="card-number">{item.eyebrow}</span>
                  <Icon size={20} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button
                    type="button"
                    className="circle-arrow"
                    aria-label={`Lihat detail ${item.title}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedItem({ icon: Icon, ...item })
                    }}
                  >
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: 70 }}>
          <Link className="button button--primary" to="/">
            Kembali ke Beranda <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* ─── Detail Modal ─── */}
      {selectedItem && (
        <div className="modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Tutup detail"
            >
              <X size={20} />
            </button>
            <div className="modal-image-col">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>
            <div className="modal-body">
              <span className="modal-eyebrow">{selectedItem.eyebrow}</span>
              <h2>{selectedItem.title}</h2>
              <p className="modal-desc">{selectedItem.description}</p>

              <div className="modal-meta-list">
                {selectedItem.location && (
                  <div className="modal-meta-item">
                    <MapPin size={16} />
                    <div>
                      <strong>Lokasi / Sebaran</strong>
                      <span>{selectedItem.location}</span>
                    </div>
                  </div>
                )}
                {selectedItem.year && (
                  <div className="modal-meta-item">
                    <Calendar size={16} />
                    <div>
                      <strong>Masa / Periode</strong>
                      <span>{selectedItem.year}</span>
                    </div>
                  </div>
                )}
                {selectedItem.significance && (
                  <div className="modal-meta-item">
                    <Award size={16} />
                    <div>
                      <strong>Nilai Penting</strong>
                      <span>{selectedItem.significance}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-actions">
                <button
                  className="button button--primary"
                  onClick={() => setSelectedItem(null)}
                >
                  Tutup Informasi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
