'use client' // Ensures this runs only in the browser

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Box } from '@chakra-ui/react'

export default function NeuralNetwork() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.SphereGeometry(0.1, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.3 })

    const nodes: THREE.Mesh[] = []
    const edges: THREE.Line[] = []

    // Define Neural Network Layers (Input, Hidden, Output)
    const layers = [8, 12, 12, 8]
    const layerSpacing = 2
    const nodeSpacing = 1

    let prevLayerNodes: THREE.Mesh[] = []

    layers.forEach((nodeCount, layerIndex) => {
      const layerNodes: THREE.Mesh[] = []

      for (let i = 0; i < nodeCount; i++) {
        const node = new THREE.Mesh(geometry, material)
        node.position.set(
          layerIndex * layerSpacing - (layers.length - 1) * layerSpacing / 2,
          (i - (nodeCount - 1) / 2) * nodeSpacing,
          (Math.random() - 0.5) * 2
        )
        scene.add(node)
        nodes.push(node)
        layerNodes.push(node)
      }

      // Connect nodes to previous layer
      if (prevLayerNodes.length > 0) {
        prevLayerNodes.forEach((prevNode) => {
          layerNodes.forEach((currentNode) => {
            const positions = new Float32Array([
              prevNode.position.x, prevNode.position.y, prevNode.position.z,
              currentNode.position.x, currentNode.position.y, currentNode.position.z
            ])
            
            const edgeGeometry = new THREE.BufferGeometry()
            edgeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

            const edge = new THREE.Line(edgeGeometry, edgeMaterial)
            scene.add(edge)
            edges.push(edge)
          })
        })
      }

      prevLayerNodes = layerNodes
    })

    camera.position.z = 8
    const controls = new OrbitControls(camera, renderer.domElement)

    const animate = () => {
      requestAnimationFrame(animate)
      nodes.forEach((node, index) => {
        const offset = index * 0.1
        node.position.y += Math.sin(Date.now() * 0.001 + offset) * 0.001
        node.position.z += Math.cos(Date.now() * 0.001 + offset) * 0.001
      })
      edges.forEach((edge) => {
        const positions = edge.geometry.attributes.position.array as Float32Array
        const start = new THREE.Vector3().fromArray(positions, 0)
        const end = new THREE.Vector3().fromArray(positions, 3)

        edge.geometry.setFromPoints([start, end])
        edge.geometry.attributes.position.needsUpdate = true
      })
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <Box ref={mountRef} width="100%" height="100vh" />
}
