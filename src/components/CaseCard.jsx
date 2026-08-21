import './CaseCard.css'

function CaseCard({ item }) {
  return (
    <article className="case-card">
      <div className="case-card__media">
        {item.thumbnail ? (
          <img src={item.thumbnail} alt={item.title} loading="lazy" />
        ) : (
          <div className="case-card__media-placeholder">
            <span className="case-card__play">▶</span>
          </div>
        )}
        <span className="case-card__category">{item.category}</span>
      </div>
      <div className="case-card__info">
        <h3>{item.title}</h3>
        <p className="case-card__client">{item.client}</p>
      </div>
    </article>
  )
}

export default CaseCard
