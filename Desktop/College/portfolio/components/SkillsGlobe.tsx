'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Heading } from '@chakra-ui/react';

const SkillsGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 + 40;
    const radius = 200;
    const depthFactor = 1.2;

    const skills = [
      'Python', 'TensorFlow', 'PyTorch', 'SQL', 'Azure', 'AWS', 'LangChain',
      'OpenAI', 'Transformers', 'Generative AI', 'React', 'Next.js', 'Data Engineering',
      'Machine Learning', 'Deep Learning', 'RAG Models', 'CUDA', 'NLP'
    ];

    const skillObjects = skills.map((skill, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      return { text: skill, x: Math.cos(angle) * radius, y: Math.sin(angle) * radius, z: Math.sin(angle * depthFactor) * 100 };
    });

    let rotationAngle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = 'bold 18px Arial';

      skillObjects.forEach((skill, index) => {
        const x = centerX + Math.cos(rotationAngle + skill.x / radius) * (skill.x + radius);
        const y = centerY + Math.sin(rotationAngle + skill.y / radius) * (skill.y + radius);
        const scale = (skill.z + 200) / 300;

        ctx.fillStyle = `rgba(0, 255, 0, ${scale})`;
        ctx.textAlign = 'center';
        ctx.fillText(skill.text, x, y);
      });

      rotationAngle += 0.008;
      requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(draw as any);
  }, []);

  return (
    <Box id="skills" width="100%" height="100vh">
      <Heading as="h2" size="2xl" mt={10} mb={4} color="brand.neonGreen">Skills</Heading>
      <canvas ref={canvasRef} />
    </Box>
  );
};

export default SkillsGlobe;








// 'use client' // Ensures the component runs only on the frontend

// import { useEffect, useRef } from 'react'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
// import { Box, Button, VStack } from '@chakra-ui/react'

// const skills = [
//   'Python', 'TensorFlow', 'PyTorch', 'SQL', 'R',
//   'Azure', 'AWS', 'CUDA', 'Langchain',
//   'OpenAI', 'Transformer models', 'Generative AI'
// ]

// export default function SkillsGlobe() {
//   const mountRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (typeof window === 'undefined' || !mountRef.current) return

//     // Scene setup
//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
//     const labelRenderer = new CSS2DRenderer()

//     renderer.setSize(window.innerWidth, window.innerHeight)
//     labelRenderer.setSize(window.innerWidth, window.innerHeight)
//     labelRenderer.domElement.style.position = 'absolute'
//     labelRenderer.domElement.style.top = '0'
//     labelRenderer.domElement.style.pointerEvents = 'none'
    
//     mountRef.current.appendChild(renderer.domElement)
//     mountRef.current.appendChild(labelRenderer.domElement)

//     // Globe setup
//     const globeGeometry = new THREE.SphereGeometry(3, 32, 32)
//     const globeMaterial = new THREE.MeshBasicMaterial({
//       color: 0x1a1a1a,
//       wireframe: true,
//     })
//     const globe = new THREE.Mesh(globeGeometry, globeMaterial)
//     scene.add(globe)

//     // Add skill labels
//     const skillsContainer = new THREE.Group()
//     skills.forEach((skill, index) => {
//       const phi = Math.acos(-1 + (2 * index) / skills.length)
//       const theta = Math.sqrt(skills.length * Math.PI) * phi
//       const radius = 4

//       const skillElement = document.createElement('div')
//       skillElement.className = 'skill-label'
//       skillElement.textContent = skill
//       skillElement.style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
//       skillElement.style.color = '#00ff00'
//       skillElement.style.padding = '5px 10px'
//       skillElement.style.borderRadius = '4px'
//       skillElement.style.fontSize = '14px'
//       skillElement.style.fontWeight = 'bold'
//       skillElement.style.border = '1px solid #00ff00'

//       const skillLabel = new CSS2DObject(skillElement)
//       skillLabel.position.set(
//         radius * Math.cos(theta) * Math.sin(phi),
//         radius * Math.sin(theta) * Math.sin(phi),
//         radius * Math.cos(phi)
//       )
//       skillsContainer.add(skillLabel)
//     })
    
//     scene.add(skillsContainer)

//     camera.position.z = 8

//     const controls = new OrbitControls(camera, renderer.domElement)
//     controls.enableDamping = true

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight
//       camera.updateProjectionMatrix()
//       renderer.setSize(window.innerWidth, window.innerHeight)
//       labelRenderer.setSize(window.innerWidth, window.innerHeight)
//     }

//     window.addEventListener('resize', handleResize)

//     const animate = () => {
//       requestAnimationFrame(animate)
//       globe.rotation.y += 0.001
//       skillsContainer.rotation.y += 0.001
//       controls.update()
//       renderer.render(scene, camera)
//       labelRenderer.render(scene, camera)
//     }
//     animate()

//     return () => {
//       window.removeEventListener('resize', handleResize)
//       mountRef.current?.removeChild(renderer.domElement)
//       mountRef.current?.removeChild(labelRenderer.domElement)
//       renderer.dispose()
//     }
//   }, [])

//   return (
//     <Box position="relative" height="100vh" width="100%" id="skills">
//       <Box ref={mountRef} position="absolute" top="0" left="0" width="100%" height="100%" />
//       <VStack position="absolute" bottom="2rem" width="100%">
//         <Button colorScheme="cyan" size="lg" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
//           View Professional Experience
//         </Button>
//       </VStack>
//     </Box>
//   )
// }
