'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { Box, Button, Text, VStack } from '@chakra-ui/react'

const skills = [
  'Python', 'TensorFlow', 'PyTorch', 'SQL', 'R',
  'Azure', 'AWS', 'CUDA', 'Langchain',
  'OpenAI', 'Transformer models', 'Generative AI'
]

export default function SkillsGlobe() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const labelRenderer = new CSS2DRenderer()

    renderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.domElement.style.position = 'absolute'
    labelRenderer.domElement.style.top = '0'
    labelRenderer.domElement.style.pointerEvents = 'none'
    
    mountRef.current.appendChild(renderer.domElement)
    mountRef.current.appendChild(labelRenderer.domElement)

    // Globe setup
    const globeGeometry = new THREE.SphereGeometry(3, 32, 32)
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a1a1a,
      wireframe: true,
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)

    // Add skill labels
    const skillsContainer = new THREE.Group()
    skills.forEach((skill, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length)
      const theta = Math.sqrt(skills.length * Math.PI) * phi
      const radius = 4

      // Create HTML element for the skill
      const skillElement = document.createElement('div')
      skillElement.className = 'skill-label'
      skillElement.textContent = skill
      skillElement.style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
      skillElement.style.color = '#00ff00'
      skillElement.style.padding = '5px 10px'
      skillElement.style.borderRadius = '4px'
      skillElement.style.fontSize = '14px'
      skillElement.style.fontWeight = 'bold'
      skillElement.style.border = '1px solid #00ff00'

      const skillLabel = new CSS2DObject(skillElement)
      
      // Position the label
      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(phi)
      
      skillLabel.position.set(x, y, z)
      skillsContainer.add(skillLabel)
    })
    
    scene.add(skillsContainer)

    camera.position.z = 8

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.5

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      labelRenderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    const animate = () => {
      requestAnimationFrame(animate)
      globe.rotation.y += 0.001
      skillsContainer.rotation.y += 0.001
      controls.update()
      renderer.render(scene, camera)
      labelRenderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
      mountRef.current?.removeChild(labelRenderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      bg="rgba(0, 0, 0, 0.3)"
      backdropFilter="blur(10px)"
      id="skills"
    >
      <Box
        ref={mountRef}
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex={1}
      />

      <VStack position="absolute" bottom="2rem" width="100%" zIndex={2}>
        <Button
          colorScheme="cyan"
          size="lg"
          onClick={() => {
            const experienceSection = document.getElementById('experience')
            if (experienceSection) {
              experienceSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 255, 0, 0.4)',
          }}
        >
          View Professional Experience
        </Button>
      </VStack>
    </Box>
  )
}