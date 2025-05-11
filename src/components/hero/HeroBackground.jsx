import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Random star field component
function StarField({ count = 5000 }) {
  const points = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  // Generate random points for stars
  const particles = Array.from({ length: count }, () => {
    const x = (Math.random() - 0.5) * 100
    const y = (Math.random() - 0.5) * 100
    const z = (Math.random() - 0.5) * 100
    const w = Math.random() * 1
    return [x, y, z, w]
  })

  // Create Float32Array for positions
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)

  particles.forEach((particle, i) => {
    positions[i * 3] = particle[0]     // x
    positions[i * 3 + 1] = particle[1] // y
    positions[i * 3 + 2] = particle[2] // z
    sizes[i] = particle[3]             // size
  })

  // Animate stars
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.05
    if (points.current) {
      points.current.rotation.x = Math.sin(time / 10)
      points.current.rotation.y = Math.cos(time / 15)
    }
  })

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

const HeroBackground = () => {
  const containerRef = useRef(null)

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 opacity-60 dark:opacity-80"
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ position: 'absolute' }}
      >
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>
    </div>
  )
}

export default HeroBackground