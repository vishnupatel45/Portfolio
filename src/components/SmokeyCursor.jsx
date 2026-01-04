import { useEffect, useRef } from 'react'
import './SmokeyCursor.css'

const SmokeyCursor = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const colorPalettes = [
      [
        { r: 255, g: 100, b: 100 },
        { r: 255, g: 150, b: 80 },
        { r: 255, g: 120, b: 100 },
      ],
      [
        { r: 180, g: 80, b: 255 },
        { r: 200, g: 100, b: 255 },
        { r: 160, g: 60, b: 240 },
      ],
      [
        { r: 0, g: 255, b: 200 },
        { r: 50, g: 255, b: 220 },
        { r: 0, g: 230, b: 180 },
      ],
    ]

    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 30 + 15
        this.speedX = (Math.random() - 0.5) * 1.5
        this.speedY = (Math.random() - 0.5) * 1.5
        this.life = 1.0
        this.decay = Math.random() * 0.015 + 0.015
        const palette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)]
        this.color = palette[Math.floor(Math.random() * palette.length)]
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life -= this.decay
        this.size *= 0.97
        this.rotation += this.rotationSpeed
        this.speedX *= 0.98
        this.speedY *= 0.98
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.life * 0.8
        
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        )
        
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life * 0.9})`)
        gradient.addColorStop(0.3, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life * 0.6})`)
        gradient.addColorStop(0.6, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life * 0.3})`)
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`)
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.shadowBlur = 20
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.5)`
        ctx.fill()
        
        ctx.restore()
      }
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY

      for (let i = 0; i < 5; i++) {
        const offsetX = (Math.random() - 0.5) * 20
        const offsetY = (Math.random() - 0.5) * 20
        particlesRef.current.push(
          new Particle(
            mouseRef.current.x + offsetX,
            mouseRef.current.y + offsetY
          )
        )
      }

      if (particlesRef.current.length > 80) {
        particlesRef.current = particlesRef.current.slice(-80)
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter(particle => {
        particle.update()
        particle.draw()
        return particle.life > 0 && particle.size > 1
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="smokey-cursor-canvas" />
}

export default SmokeyCursor
