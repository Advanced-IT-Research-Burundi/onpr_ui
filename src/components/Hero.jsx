import React, { useEffect, useMemo, useRef, useState } from 'react'
import "../assets/styles/hero.css"

function Hero() {
  // Slides content can be expanded or driven by props in the future
  const slides = useMemo(
    () => [
      {
        id: 1,
        title: 'Best Place to Travel',
        subtitle: 'Text Here',
      },
      {
        id: 2,
        title: 'Best Place to Travel',
        subtitle: 'Text Here',
      },
      {
        id: 3,
        title: 'Best Place to Travel',
        subtitle: 'Text Here',
      },
    ],
    []
  )

  // Options (converted from jQuery init)
  const autoplay = true
  const autoplayInterval = 5000 // ms
  const loop = true

  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  const goTo = (i) => {
    const total = slides.length
    if (loop) {
      const next = (i + total) % total
      setIndex(next)
    } else {
      setIndex(Math.max(0, Math.min(i, total - 1)))
    }
  }

  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  useEffect(() => {
    if (!autoplay) return
    // Clear any existing interval before setting a new one
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      next()
    }, autoplayInterval)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [index, autoplay, autoplayInterval])

  return (
    <div className="owl-carousel home-slider">
      {/* Slides */}
      {slides.map((slide, i) => {
        const active = i === index
        return (
          <div
            key={slide.id}
            className={`slider-item ${active ? 'active' : ''}`}
            aria-hidden={!active}
            style={{ display: active ? 'block' : 'none' }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-12 ftco-animate">
                  <div className="text w-100 text-center">
                    <h2>{slide.title}</h2>
                    <h3 className="mb-3">{slide.subtitle}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Nav */}
      <div className="owl-nav">
        <button className="owl-prev" aria-label="Previous" onClick={prev}>
          <span className='ion-ios-arrow-back'></span>
        </button>
        <button className="owl-next" aria-label="Next" onClick={next}>
          <span className='ion-ios-arrow-forward'></span>
        </button>
      </div>

      {/* Dots */}
      <div className="owl-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`owl-dot ${i === index ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero