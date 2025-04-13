"use client"
import AboutSection from '../../public/components/AboutSection'
import Header from '../../public/components/PortfolioHeader'
import ProjectsSection from '../../public/components/ProjectSection'
import SideButtons from '../../public/components/SideButtons'
import TechSection from '../../public/components/TechSection'
import ContactForm from '../../public/components/ContactSection'
import { fonts } from './fonts'
import { Providers } from './providers'
import { Box, useColorModeValue } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Box
            minHeight="100vh"
            bg={bgColor}
            transition="background-color 0.2s ease" // Optional: smooth transition
          >
            <Header />
            <SideButtons />
            <AboutSection />
            <TechSection />
            <ProjectsSection />
            {children}
            <ContactForm />
          </Box>
        </Providers>
      </body>
    </html>
  )
}