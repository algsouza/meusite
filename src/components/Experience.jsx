import { experience } from '../data/experience'
import { useReveal } from '../hooks/useReveal'
import PhotoCarousel from './PhotoCarousel'
import './Experience.css'

function Experience() {
  const ref = useReveal()

  return (
    <section id="experiencia" className="experience" ref={ref}>
      <div className="container">
        <div className="experience__heading reveal">
          <span className="eyebrow">Experiência</span>
          <h2>Uma trajetória construída na tela.</h2>
        </div>

        <ol className="experience__timeline">
          {experience.map((item) => (
            <li key={item.org} className="reveal">
              <div className="experience__period">{item.period}</div>
              <div className="experience__content">
                <h3>{item.org}</h3>
                <p className="experience__role">{item.role}</p>

                {item.caseText ? (
                  <div className="experience__case">
                    {item.caseText.map((paragraph, i) => (
                      <p className="experience__description" key={i}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="experience__description">{item.description}</p>
                )}

                {item.videoUrl && (
                  <div className="experience__video">
                    <iframe
                      src={item.videoUrl}
                      title={item.videoTitle || item.org}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                )}

                {item.gallery && item.gallery.length > 0 && (
                  <div className="experience__gallery">
                    {item.galleryLabel && (
                      <span className="experience__gallery-label">
                        {item.galleryLabel}
                      </span>
                    )}
                    <PhotoCarousel
                      images={item.gallery}
                      alt={`Fotos — ${item.org}`}
                    />
                  </div>
                )}

                {item.highlight && (
                  <div className="experience__highlight">
                    <span className="experience__highlight-eyebrow">
                      Projeto em destaque
                    </span>
                    <h4 className="experience__highlight-title">
                      {item.highlight.title}
                    </h4>
                    <p className="experience__highlight-subtitle">
                      {item.highlight.subtitle}
                    </p>
                    <p className="experience__highlight-credits">
                      {item.highlight.credits}
                    </p>

                    {item.highlight.videos && item.highlight.videos.length > 0 && (
                      <div className="experience__highlight-videos">
                        {item.highlight.videos.map((v, i) => (
                          <div className="experience__highlight-video" key={i}>
                            <iframe
                              src={v.videoUrl}
                              title={v.title || `VT ${i + 1}`}
                              loading="lazy"
                              allowFullScreen
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {item.highlight.photos && item.highlight.photos.length > 0 && (
                      <div className="experience__highlight-photos">
                        {item.highlight.photos.map((src, i) => (
                          <img
                            key={src}
                            src={src}
                            alt={`${item.highlight.title} ${i + 1}`}
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
