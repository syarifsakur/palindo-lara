import { useState } from 'react'
import { ArrowUpRight, Clock, Tag, X, Calendar, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { news } from '../data/content'

export default function BeritaPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null)

  const categories = ['Semua', ...Array.from(new Set(news.map((n) => n.category)))]

  const filteredNews = news.filter((item) =>
    activeCategory === 'Semua' ? true : item.category === activeCategory
  )

  const featured = news[0]

  return (
    <div className="page-shell">
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <div className="page-hero-inner fade-up">
          <div className="section-label">03 / WARTA & DOKUMENTASI</div>
          <h1>
            Kabar <em>Kebudayaan</em>
          </h1>
          <p className="page-hero-copy">
            Ikuti perkembangan terkini pelestarian cagar budaya, festival tradisi,
            dan riset kebudayaan di seluruh penjuru Sulawesi Tengah.
          </p>

          <div className="filter-tabs" style={{ marginTop: 28 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Article (if on 'Semua') ─── */}
      {activeCategory === 'Semua' && featured && (
        <section className="featured-news-section">
          <article
            className="featured-news-card fade-up"
            onClick={() => setSelectedNews(featured)}
          >
            <div className="featured-news-img">
              <img src={featured.image} alt={featured.title} />
              <div className="featured-badge-tag">Sorotan Utama</div>
            </div>
            <div className="featured-news-body">
              <div className="news-meta-inline">
                <span className="news-cat"><Tag size={12} /> {featured.category}</span>
                <span className="news-date"><Calendar size={12} /> {featured.date}</span>
                <span className="news-time"><Clock size={12} /> {featured.readTime}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
              <button className="button button--primary" type="button">
                Baca Selengkapnya <ArrowUpRight size={16} />
              </button>
            </div>
          </article>
        </section>
      )}

      {/* ─── News Grid ─── */}
      <section className="news-section" style={{ paddingTop: 30 }}>
        <div className="news-grid">
          {filteredNews.map((item, index) => (
            <article
              className={`news-card fade-up fade-up-delay-${(index % 3) + 1}`}
              key={item.id}
              onClick={() => setSelectedNews(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className="img-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="news-body">
                <div className="news-meta-inline" style={{ marginBottom: 8 }}>
                  <span className="news-cat" style={{ color: 'var(--maroon)', fontWeight: 700, fontSize: 10 }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: 11, color: '#888' }}>•</span>
                  <span style={{ fontSize: 11, color: '#888' }}>{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14 }}>
                  <span style={{ fontSize: 11, color: '#777', display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Clock size={12} /> {item.readTime}
                  </span>
                  <span style={{ color: 'var(--maroon)', fontWeight: 700, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}>
                    Baca <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 70 }}>
          <Link className="button button--primary" to="/">
            Kembali ke Beranda <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* ─── News Detail Modal ─── */}
      {selectedNews && (
        <div className="modal-backdrop" onClick={() => setSelectedNews(null)}>
          <div className="modal-card modal-card--article" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedNews(null)}
              aria-label="Tutup berita"
            >
              <X size={20} />
            </button>
            <div className="modal-article-header">
              <div className="news-meta-inline" style={{ marginBottom: 12 }}>
                <span className="news-cat" style={{ background: 'rgba(117, 29, 42, .08)', padding: '4px 10px', borderRadius: 4, color: 'var(--maroon)', fontWeight: 700, fontSize: 11 }}>
                  {selectedNews.category}
                </span>
                <span style={{ fontSize: 12, color: '#888', marginLeft: 8 }}>{selectedNews.date}</span>
                <span style={{ fontSize: 12, color: '#888', marginLeft: 8 }}>• {selectedNews.readTime}</span>
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.2 }}>{selectedNews.title}</h2>
            </div>
            <div className="modal-article-img">
              <img src={selectedNews.image} alt={selectedNews.title} />
            </div>
            <div className="modal-body" style={{ paddingTop: 20 }}>
              <p className="modal-lead" style={{ fontSize: 16, lineHeight: 1.7, color: '#333', fontWeight: 500 }}>
                {selectedNews.description}
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: '#666', marginTop: 14 }}>
                {selectedNews.content}
              </p>
              <div className="modal-actions" style={{ marginTop: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  className="button button--dark"
                  onClick={() => setSelectedNews(null)}
                >
                  Tutup Berita
                </button>
                <button
                  type="button"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, background: 'none', border: '1px solid var(--line)', padding: '10px 16px', borderRadius: 6, cursor: 'pointer' }}
                  onClick={() => alert('Tautan berita disalin ke clipboard!')}
                >
                  <Share2 size={14} /> Bagikan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
