'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Text } from '@chakra-ui/react'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedName() {
  const nameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(nameRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: nameRef.current,
          start: 'top bottom-=100',
          end: 'bottom center',
          scrub: true,
        },
      })
    }, nameRef)

    return () => ctx.revert()
  }, [])

  return (
    <Text
      ref={nameRef}
      fontSize={{ base: '2xl', md: '6xl' }}
      fontWeight="bold"
      color="brand.neonGreen"
      mb={4}
    >
      Aman Gupta
    </Text>
  )
}