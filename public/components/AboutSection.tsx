"use client"

import { Box, Heading, Text, Flex, Image, useColorModeValue, Stack, Divider } from '@chakra-ui/react';

const AboutSection = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('blue.200', 'blue.600');
  const accentColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Box id="about" py={20} px={{ base: 6, md: 20 }} bg={bgColor} fontWeight="600">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        gap={12}
      >
        {/* Circular Profile Image with subtle shadow */}
        <Box
          w={{ base: '180px', md: '280px' }}
          h={{ base: '180px', md: '280px' }}
          flexShrink={0}
          position="relative"
          _hover={{
            transform: 'scale(1.03)',
            transition: 'transform 0.3s ease'
          }}
          transition="transform 0.2s ease"
        >
          <Image
            src="../assets"
            alt="Ismail El'harrab"
            borderRadius="full"
            boxSize="100%"
            objectFit="cover"
            borderWidth="4px"
            borderStyle="solid"
            borderColor={borderColor}
            boxShadow="xl"
            cursor="pointer"
          />
        </Box>
        {/* Text Content with better spacing */}
        <Box w={{ base: 'full', md: '70%' }}>
          <Heading 
            as="h2" 
            size="2xl" 
            mb={8} 
            fontWeight="extrabold"
            position="relative"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: '0',
              width: '60px',
              height: '4px',
              bg: accentColor,
              borderRadius: 'full'
            }}
          >
            About Me
          </Heading>
          
          <Stack spacing={5}>
            <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} lineHeight="1.8">
              Hello!  
              <Box as="span" fontWeight="bold" color={useColorModeValue('gray.700', 'white')}> I'm Ismail El'harrab
              </Box>,I am deeply passionate about web development.
            </Text>
            
            <Divider borderColor={accentColor} opacity="0.6" w="20%" />
            
            <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} lineHeight="1.8">
             As a passionate Full Stack Developer with <Box as="span" fontWeight="semibold" color="#5e9f00">2 years of hands-on experience at 1337 School</Box>, 
             specialize in building scalable, high-performance web applications using <Box as="span" fontWeight="semibold" color="#5e9f00">ASP.NET (C#), SQL Server (SQL),Django (Python), and Next.js (React)</Box>. My expertise spans backend development, database management, frontend engineering, and performance optimization, allowing me to deliver efficient, end-to-end solutions with seamless integration.
            </Text>
            
            <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} lineHeight="1.8">
              My goal is to continually grow as a developer and bring creativity and precision to every project I undertake.
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;