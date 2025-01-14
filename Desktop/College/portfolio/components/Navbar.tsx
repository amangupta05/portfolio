// 'use client' // Ensures it runs on the frontend

// import { useState, useEffect } from 'react'
// import {
//   Box,
//   Flex,
//   Button,
//   HStack,
//   IconButton,
//   VStack,
//   Collapse,
//   useDisclosure,
//   Text,
// } from '@chakra-ui/react'
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

// const NavItems = [
//   { name: 'Home', id: 'home' },
//   { name: 'About', id: 'about' },
//   { name: 'Skills', id: 'skills' },
//   { name: 'Experience', id: 'experience' },
//   { name: 'Projects', id: 'highlights' },
// ]

// export default function Navbar() {
//   const { isOpen, onToggle } = useDisclosure()
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     if (typeof window === 'undefined') return // Fix for static export

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const scrollToSection = (id: string) => {
//     if (typeof window !== 'undefined') {
//       const element = document.getElementById(id)
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' })
//       }
//     }
//     if (isOpen) onToggle()
//   }

//   return (
//     <Box
//       position="fixed"
//       top={0}
//       left={0}
//       right={0}
//       zIndex={1000}
//       transition="all 0.3s ease"
//       bg={scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'}
//       backdropFilter={scrolled ? 'blur(10px)' : 'none'}
//       boxShadow={scrolled ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none'}
//     >
//       <Flex
//         minH="60px"
//         py={2}
//         px={4}
//         align="center"
//         maxW="container.xl"
//         mx="auto"
//         justify="space-between"
//       >
//         {/* Brand Logo */}
//         <Text
//           fontWeight="bold"
//           fontSize="xl"
//           color="brand.electricBlue"
//           cursor="pointer"
//           onClick={() => scrollToSection('home')}
//         >
//           AG
//         </Text>

//         {/* Desktop Navigation */}
//         <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
//           {NavItems.map((item) => (
//             <Button
//               key={item.id}
//               variant="ghost"
//               color="white"
//               onClick={() => scrollToSection(item.id)}
//               _hover={{
//                 bg: 'whiteAlpha.200',
//                 color: 'brand.electricBlue',
//                 transform: 'translateY(-2px)',
//               }}
//               transition="all 0.3s ease"
//             >
//               {item.name}
//             </Button>
//           ))}
//         </HStack>

//         {/* Mobile Menu Button */}
//         <IconButton
//           onClick={onToggle}
//           icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
//           variant="ghost"
//           color="white"
//           aria-label="Toggle Navigation"
//           display={{ base: 'flex', md: 'none' }}
//         />

//       </Flex>

//       {/* Mobile Menu */}
//       <Collapse in={isOpen} animateOpacity>
//         <Box bg="blackAlpha.900" p={4} display={{ md: 'none' }}>
//           <VStack spacing={4}>
//             {NavItems.map((item) => (
//               <Button
//                 key={item.id}
//                 w="full"
//                 variant="ghost"
//                 color="white"
//                 onClick={() => scrollToSection(item.id)}
//                 _hover={{
//                   bg: 'whiteAlpha.200',
//                   color: 'brand.electricBlue',
//                 }}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </VStack>
//         </Box>
//       </Collapse>
//     </Box>
//   )
// }
'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Button,
  HStack,
  IconButton,
  VStack,
  Collapse,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'highlights' },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return; // ✅ Prevent SSR issues

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) onToggle();
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transition="all 0.3s ease"
      bg={scrolled ? 'blackAlpha.800' : 'transparent'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      boxShadow={scrolled ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none'}
      py={3}
    >
      <Flex minH="60px" px={6} align="center" maxW="container.xl" mx="auto" justify="space-between">
        {/* ✅ Logo with Home Navigation */}
        <Text
          fontWeight="bold"
          fontSize="2xl"
          color="brand.electricBlue"
          cursor="pointer"
          _hover={{ color: 'brand.neonGreen', transform: 'scale(1.05)' }}
          transition="all 0.3s ease"
          onClick={() => scrollToSection('home')}
        >
          AG
        </Text>

        {/* ✅ Desktop Navigation */}
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          {NavItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              color="white"
              onClick={() => scrollToSection(item.id)}
              _hover={{
                bg: 'whiteAlpha.200',
                color: 'brand.electricBlue',
                transform: 'translateY(-2px)',
              }}
              transition="all 0.3s ease"
            >
              {item.name}
            </Button>
          ))}
        </HStack>

        {/* ✅ Mobile Menu Button */}
        <IconButton
          onClick={onToggle}
          icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={6} h={6} />}
          variant="ghost"
          color="white"
          aria-label="Toggle Navigation"
          display={{ base: 'flex', md: 'none' }}
          _hover={{ bg: 'whiteAlpha.300' }}
        />
      </Flex>

      {/* ✅ Mobile Navigation Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box bg="blackAlpha.900" p={4} display={{ md: 'none' }}>
          <VStack spacing={4}>
            {NavItems.map((item) => (
              <Button
                key={item.id}
                w="full"
                variant="ghost"
                color="white"
                onClick={() => scrollToSection(item.id)}
                _hover={{
                  bg: 'whiteAlpha.300',
                  color: 'brand.electricBlue',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s ease"
              >
                {item.name}
              </Button>
            ))}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
}
