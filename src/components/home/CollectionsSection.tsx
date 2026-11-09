import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { collections } from '../../data/content'

export default function CollectionsSection() {
  return (
    <section className="collections-section" id="koleksi">
      <div className="section-heading fade-up">
        <div>
          <div className="section-label">02 / JELAJAHI</div>
          <h2>Ruang <em>pengetahuan</em></h2>
        </div>
        <p>Temukan ragam bentuk budaya yang tumbuh, dirawat, dan diwariskan dari generasi ke generasi.</p>
      </div>

      <div className="collection-grid">
        {collections.map(({ icon: Icon, ...collection }, index) => (
          <article
            className={`collection-card ${collection.className} fade-up fade-up-delay-${index + 1}`}
            key={collection.title}
          >
            <img src={collection.image} alt={collection.title} loading="lazy" />
            <div className="card-overlay" />
            <div className="collection-content">
              <span className="card-number">{collection.eyebrow}</span>
              <Icon size={20} />
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
              <Link to="/jelajah" className="circle-arrow" aria-label={`Jelajahi ${collection.title}`}>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
