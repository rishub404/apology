"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export function FloatingStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generated: Star[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 6,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 1.5,
    }))
    setStars(generated)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <svg
          key={star.id}
          className="animate-twinkle absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2L14.09 8.26L20.18 8.63L15.54 12.74L16.82 18.77L12 15.27L7.18 18.77L8.46 12.74L3.82 8.63L9.91 8.26L12 2Z"
            fill="currentColor"
            className="text-primary/40"
          />
        </svg>
      ))}
      {/* Extra sparkle dots */}
      {stars.slice(0, 12).map((star) => (
        <div
          key={`dot-${star.id}`}
          className="animate-twinkle absolute rounded-full bg-accent/60"
          style={{
            left: `${(star.x + 30) % 100}%`,
            top: `${(star.y + 20) % 100}%`,
            width: star.size * 0.4,
            height: star.size * 0.4,
            animationDelay: `${star.delay + 1}s`,
            animationDuration: `${star.duration + 0.5}s`,
          }}
        />
      ))}
    </div>
  )
}
