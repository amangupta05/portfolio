'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Box } from '@chakra-ui/react'

export default function NeuralNetwork() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.SphereGeometry(0.1, 32, 32) // Increased node size
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

    const nodes: THREE.Mesh[] = []
    const edges: THREE.Line[] = []

    // Create layers for the neural network
    const layers = [8, 12, 12, 8] // Input, hidden, hidden, output
    const layerSpacing = 2
    const nodeSpacing = 1

    let nodeIndex = 0
    layers.forEach((nodeCount, layerIndex) => {
      for (let i = 0; i < nodeCount; i++) {
        const node = new THREE.Mesh(geometry, material)
        const x = layerIndex * layerSpacing - (layers.length - 1) * layerSpacing / 2
        const y = (i - (nodeCount - 1) / 2) * nodeSpacing
        const z = (Math.random() - 0.5) * 2 // Add random z position for 3D effect
        node.position.set(x, y, z)
        scene.add(node)
        nodes.push(node)

        // Connect to previous layer
        if (layerIndex > 0) {
          const prevLayerStart = layers.slice(0, layerIndex).reduce((sum, count) => sum + count, 0)
          const prevLayerSize = layers[layerIndex - 1]
          for (let j = 0; j < prevLayerSize; j++) {
            const prevNodeIndex = prevLayerStart - prevLayerSize + j
            const prevNode = nodes[prevNodeIndex]
            const edgeGeometry = new THREE.BufferGeometry().setFromPoints([
              prevNode.position,
              node.position,
            ])
            const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00, opacity: 0.2, transparent: true })
            const edge = new THREE.Line(edgeGeometry, edgeMaterial)
            scene.add(edge)
            edges.push(edge)
          }
        }
        nodeIndex++
      }
    })

    camera.position.z = 7 // Increased camera distance

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = true // Enable zooming for better exploration

    const animate = () => {
      requestAnimationFrame(animate)
      const time = Date.now() * 0.001
      nodes.forEach((node, index) => {
        const offset = index * 0.1
        node.position.y += Math.sin(time + offset) * 0.001
        node.position.z += Math.cos(time + offset) * 0.001 // Add z-axis movement
      })
      edges.forEach((edge) => {
        const positions = edge.geometry.attributes.position.array
        const startIndex = Math.floor(Math.random() * (positions.length / 3)) * 3
        positions[startIndex + 1] += Math.sin(time + startIndex) * 0.001
        positions[startIndex + 2] += Math.cos(time + startIndex) * 0.001 // Update z position
        edge.geometry.attributes.position.needsUpdate = true
      })
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <Box
      ref={mountRef}
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      sx={{
        '& canvas': {
          width: '100% !important',
          height: '100% !important',
        }
      }}
    />
  )
}

