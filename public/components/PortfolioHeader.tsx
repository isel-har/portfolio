'use client'

import { Box, IconButton, useColorMode , useColorModeValue} from '@chakra-ui/react';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode(); // to handle!
    const bgColor = useColorModeValue('gray.50', 'gray.800');
    const [shadow, setShadow] = useState<string>("");
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setShadow("md");
          } else {
            setShadow("");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    // setShadow("sm");

    return (
    <Box bg={bgColor} w='100%' p={4} color='white' boxShadow={shadow} zIndex={2} position="fixed">
        <Flex justifyContent="flex-end" pr="12">
            <ButtonGroup gap='4'>
                <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                size="md"
                />
                <Button colorScheme='gray' size='md' variant='ghost'
                     onClick={() => scrollToSection('about')}>
                    About
                </Button>
                <Button colorScheme='gray' size='md' variant='ghost'
                    onClick={() => scrollToSection('projects')}>
                    Projects
                </Button>
                <Button colorScheme='gray' size='md' variant='ghost'
                     onClick={() => scrollToSection('tech')}>
                    Tech
                </Button>
                <Button colorScheme='gray' size='md' variant='ghost'
                     onClick={() => scrollToSection('contact')}>
                    Contact
                </Button>
                <Button colorScheme='gray' size='md' variant='outline'
                  onClick={() => window.open("https://drive.google.com/file/d/1EwzjRs1m1fhcQFyjysVVzVZssfxXNiD8/view", "_blank")}>
                    Resume
                </Button>
            </ButtonGroup>
        </Flex>
        {/* <Icon as={Code} boxSize={6} color="gray.600"/> */}
    </Box>
  );
}

export default Header;