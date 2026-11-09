import { ArrowUpRight, Mountain } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero.png'

export default function FeatureSection() {
  return (
    <section className="feature-section" id="warisan">
      <div
        className="feature-image"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(80, 14, 20, .3), transparent), url("${heroImage}")`,
        }}
      >
        <div className="feature-badge"><Mountain size={17} /> EKSPLORASI BUDAYA</div>
      </div>
      <div className="feature-copy">
        <div className="section-label fade-up">03 / CERITA PILIHAN</div>
        <h2 className="fade-up fade-up-delay-1">Setiap warisan<br />punya <em>cerita.</em></h2>
        <p className="fade-up fade-up-delay-2">
          Kenali lebih jauh warisan budaya Sulawesi Tengah — dari asal-usul, makna, hingga
          masyarakat yang menjaganya tetap hidup.
        </p>
        <Link className="button button--dark fade-up fade-up-delay-3" to="/berita">
          Baca cerita pilihan <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  )
}
