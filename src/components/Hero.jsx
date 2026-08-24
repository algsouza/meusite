import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const HERO_VIDEO_SRC = '/video/hero-laptop.mp4'

function Hero() {
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    if (!HERO_VIDEO_SRC || !videoRef.current) return
    const video = videoRef.current
    const onCanPlay = () => setVideoReady(true)
    video.addEventListener('canplay', onCanPlay)
    return () => video.removeEventListener('canplay', onCanPlay)
  }, [])

  return (
    <section className="hero" id="topo">
      <div className="hero__bg">
        <div className="hero__backdrop" aria-hidden="true">
          <div className="hero__grid" />
          <div className="hero__glow" />
          <div className="hero__glow--accent" />
          <div className="hero__scan" />
          <div className="hero__led hero__led--1" />
          <div className="hero__led hero__led--2" />
        </div>

        {HERO_VIDEO_SRC && (
          <div className="hero__video-wrap">
            <video
              ref={videoRef}
              className={`hero__video ${videoReady ? 'is-ready' : ''}`}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
          </div>
        )}

        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <span className="hero__eyebrow">Editor de Vídeo · Filmmaker</span>
        <h1>André Pizza</h1>
        <p className="hero__tagline">
          Experiência, criatividade e linguagem visual para transformar ideias
          em imagens.
        </p>
        <div className="hero__actions">
          <a href="#cases" className="btn btn--primary">
            Ver Cases
          </a>
          <a href="#contato" className="btn btn--ghost">
            Contato
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

export default Hero
