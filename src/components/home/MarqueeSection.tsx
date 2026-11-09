import { marqueeItems } from '../../data/content'

export default function MarqueeSection() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {marqueeItems.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
