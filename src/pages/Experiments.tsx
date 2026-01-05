import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text, MeshWobbleMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function InteractiveBox({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Float speed={2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        scale={clicked ? 1.5 : hovered ? 1.2 : 1}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <MeshWobbleMaterial
          color={hovered ? '#ff6b6b' : color}
          factor={0.6}
          speed={clicked ? 5 : 1}
        />
      </mesh>
    </Float>
  )
}

function Demo3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <color attach="background" args={['#1a1a2e']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#6366f1" />
      
      <InteractiveBox position={[-2, 0, 0]} color="#6366f1" />
      <InteractiveBox position={[0, 0, 0]} color="#ec4899" />
      <InteractiveBox position={[2, 0, 0]} color="#10b981" />
      
      <Text
        position={[0, -2, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Click the boxes!
      </Text>
      
      <OrbitControls enablePan={false} />
    </Canvas>
  )
}

const experiments = [
  {
    id: 'interactive-boxes',
    title: 'Interactive 3D Boxes',
    description: 'Click and hover on the boxes to see them react!',
    component: Demo3D,
  },
]

export default function Experiments() {
  const [activeExperiment, setActiveExperiment] = useState(experiments[0])

  return (
    <div className="page experiments-page">
      <h1 className="page-title">Experiments</h1>
      <p className="page-subtitle">Interactive 3D demos and creative coding projects.</p>
      
      <div className="experiments-container">
        <div className="experiment-canvas">
          <activeExperiment.component />
        </div>
        
        <div className="experiments-list">
          {experiments.map((exp) => (
            <button
              key={exp.id}
              className={`experiment-item ${activeExperiment.id === exp.id ? 'active' : ''}`}
              onClick={() => setActiveExperiment(exp)}
            >
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </button>
          ))}
          
          <div className="coming-soon">
            <h3>🚧 More Coming Soon</h3>
            <p>I'm always working on new experiments!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
