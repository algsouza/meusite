import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './PhotoCarousel.css'

function PhotoCarousel({ images, alt }) {
  const trackRef = useRef(null)
  const touchX = useRef(null)
  const scrollSyncTimeout = useRef(null)
  const [trackIndex, setTrackIndex] = useState(0)
  const [openIndex, setOpenIndex] = useState(null)
  const [closing, setClosing] = useState(false)

  const getCardStep = () => {
    const track = trackRef.current
    if (!track) return 280
    const card = track.querySelector('.photo-carousel__item')
    if (!card) return 280
    const trackStyle = getComputedStyle(track)
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || '16') || 16
    return card.offsetWidth + gap
  }

  const scrollToTrackIndex = (index) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(images.length - 1, index))
    track.scrollTo({ left: clamped * getCardStep(), behavior: 'smooth' })
    setTrackIndex(clamped)
  }

  const goTrackPrev = () => scrollToTrackIndex(trackIndex - 1)
  const goTrackNext = () => scrollToTrackIndex(trackIndex + 1)

  // Keep trackIndex in sync when the user drags/swipes the track manually.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      clearTimeout(scrollSyncTimeout.current)
      scrollSyncTimeout.current = window.setTimeout(() => {
        const step = getCardStep()
        const idx = Math.round(track.scrollLeft / step)
        setTrackIndex(Math.max(0, Math.min(images.length - 1, idx)))
      }, 120)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      clearTimeout(scrollSyncTimeout.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length])

  const openAt = (i) => {
    setClosing(false)
    setOpenIndex(i)
  }

  const close = useCallback(() => {
    setClosing(true)
    window.setTimeout(() => {
      setOpenIndex(null)
      setClosing(false)
    }, 220)
  }, [])

  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % images.length))
  }, [images.length])

  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))
  }, [images.length])

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, close, next, prev])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const delta = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(delta) > 40) {
      if (delta < 0) next()
      else prev()
    }
    touchX.current = null
  }

  const atStart = trackIndex <= 0
  const atEnd = trackIndex >= images.length - 1

  return (
    <div className="photo-carousel">
      <div className="photo-carousel__track" ref={trackRef}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="photo-carousel__item"
            onClick={() => openAt(i)}
            aria-label={`Ampliar foto ${i + 1}`}
          >
            <img src={src} alt={`${alt} ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      <div className="photo-carousel__nav">
        <button
          type="button"
          className="photo-carousel__arrow"
          onClick={goTrackPrev}
          disabled={atStart}
          aria-label="Foto anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          className="photo-carousel__arrow"
          onClick={goTrackNext}
          disabled={atEnd}
          aria-label="Próxima foto"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {openIndex !== null &&
        createPortal(
          <div
            className={`photo-carousel__lightbox ${closing ? 'is-closing' : ''}`}
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button type="button" className="photo-carousel__close" onClick={close} aria-label="Fechar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <button
              type="button"
              className="photo-carousel__lightbox-arrow photo-carousel__lightbox-arrow--prev"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Foto anterior"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>

            <img
              src={images[openIndex]}
              alt={`${alt} ${openIndex + 1}`}
              className="photo-carousel__lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              type="button"
              className="photo-carousel__lightbox-arrow photo-carousel__lightbox-arrow--next"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Próxima foto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <span className="photo-carousel__counter">
              {openIndex + 1} / {images.length}
            </span>
          </div>,
          document.body,
        )}
    </div>
  )
}

export default PhotoCarousel
