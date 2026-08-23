import './CaseCard.css'

function getYouTubeId(url) {
  if (!url) return null
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/
  )
  return match ? match[1] : null
}

function CaseCard({ item }) {
  const hasVideos = item.videos && item.videos.length > 0
  const CardTag = item.video ? 'a' : 'article'
  const cardLinkProps = item.video
    ? { href: item.video, target: '_blank', rel: 'noopener noreferrer' }
    : {}
  const youtubeId = getYouTubeId(item.video)
  const thumbnail =
    item.thumbnail || (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : null)

  return (
    <CardTag className="case-card" {...cardLinkProps}>
      <div className="case-card__media">
        {thumbnail && (
          <img src={thumbnail} alt={item.title} loading="lazy" />
        )}
        {(!thumbnail || youtubeId) && (
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

      {hasVideos && (
        <ul className="case-card__videos">
          {item.videos.map((v, i) => (
            <li className="case-card__video" key={i}>
              <div className="case-card__video-head">
                <span className="case-card__video-title">{v.title}</span>
                {v.year && <span className="case-card__video-year">{v.year}</span>}
              </div>
              {v.description && (
                <p className="case-card__video-desc">{v.description}</p>
              )}
              {v.role && <p className="case-card__video-role">{v.role}</p>}
              {v.videoUrl ? (
                <div className="case-card__video-embed">
                  <iframe
                    src={v.videoUrl}
                    title={v.title}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              ) : (
                <span className="case-card__video-pending">
                  {v.videoNote || 'Vídeo em breve'}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </CardTag>
  )
}

export default CaseCard
