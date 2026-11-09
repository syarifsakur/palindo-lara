import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { news } from '../../data/content'

export default function NewsSection() {
  return (
    <section className="news-section" id="berita">
      <div className="section-heading fade-up">
        <div>
          <div className="section-label">04 / KABAR TERKINI</div>
          <h2>Berita <em>kebudayaan</em></h2>
        </div>
        <Link className="text-link" to="/berita">
          Lihat semua berita <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className="news-grid">
        {news.map((item, index) => (
          <article className={`news-card fade-up fade-up-delay-${index + 1}`} key={item.title}>
            <div className="img-wrap">
              <img src={item.image} alt="" loading="lazy" />
            </div>
            <div className="news-body">
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to="/berita" aria-label={`Baca ${item.title}`}>
                Baca selengkapnya <ArrowUpRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
