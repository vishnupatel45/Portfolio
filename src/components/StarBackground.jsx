import { useEffect, useRef } from 'react'
import './StarBackground.css'

const StarBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createStars = () => {
      const starCount = 150
      const stars = []

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div')
        star.className = 'star'
        
        const x = Math.random() * 100
        const y = Math.random() * 100
        
        const size = Math.random() < 0.7 ? Math.random() * 2 + 1 : Math.random() * 3 + 2
        
        const duration = Math.random() * 4 + 2
        
        const delay = Math.random() * 3
        
        star.style.left = x + '%'
        star.style.top = y + '%'
        star.style.width = size + 'px'
        star.style.height = size + 'px'
        star.style.animationDuration = duration + 's'
        star.style.animationDelay = delay + 's'
        
        const colors = [
          'rgba(255, 255, 255, 0.9)',
          'rgba(99, 102, 241, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.7)',
          'rgba(6, 182, 212, 0.7)',
          'rgba(255, 255, 255, 0.6)',
        ]
        const color = colors[Math.floor(Math.random() * colors.length)]
        star.style.backgroundColor = color
        star.style.boxShadow = `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`
        
        container.appendChild(star)
        stars.push(star)
      }

      return stars
    }

    const stars = createStars()

    return () => {
      stars.forEach(star => {
        if (star.parentNode) {
          star.parentNode.removeChild(star)
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="star-background" />
}

export default StarBackground

