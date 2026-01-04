import { useEffect, useRef } from 'react'
import './GradientBackground.css'

const GradientBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createGradient = () => {
      const gradients = []
      const gradientCount = 3

      for (let i = 0; i < gradientCount; i++) {
        const gradient = document.createElement('div')
        gradient.className = 'gradient-blob'
        
        const colors = [
          ['#6366f1', '#8b5cf6', '#ec4899'],
          ['#06b6d4', '#3b82f6', '#8b5cf6'],
          ['#f59e0b', '#ef4444', '#ec4899'],
        ]
        
        const colorSet = colors[i % colors.length]
        const size = Math.random() * 400 + 300
        const x = Math.random() * 100
        const y = Math.random() * 100
        
        gradient.style.width = size + 'px'
        gradient.style.height = size + 'px'
        gradient.style.left = x + '%'
        gradient.style.top = y + '%'
        gradient.style.background = `radial-gradient(circle, ${colorSet[0]} 0%, ${colorSet[1]} 50%, ${colorSet[2]} 100%)`
        gradient.style.animationDelay = (i * 0.5) + 's'
        
        container.appendChild(gradient)
        gradients.push(gradient)
      }

      return gradients
    }

    const gradients = createGradient()

    return () => {
      gradients.forEach(gradient => {
        if (gradient.parentNode) {
          gradient.parentNode.removeChild(gradient)
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="gradient-background" />
}

export default GradientBackground

