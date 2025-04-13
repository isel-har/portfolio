"use client"
// import { DiMsqlServer } from "react-icons/di";

import { TbBrandCSharp } from "react-icons/tb";
import { SiGnubash } from "react-icons/si";
import { JSX } from "@emotion/react/jsx-runtime";
import { Box, Heading, Flex, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaDocker,
  FaDatabase
} from 'react-icons/fa';
import { 
//   SiCsharp, 
  SiCplusplus, 
  SiC, 
  SiNextdotjs, 
  SiDjango,
//   SiMicrosoftsqlserver,
//   SiBash,
  SiDotnet
} from 'react-icons/si';

type TechCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps';

interface TechItem {
  name: string;
  category: TechCategory;
  icon: JSX.Element;
}

const TechSection = () => {
  const techStack: TechItem[] = [
    { name: 'HTML', category: 'Frontend', icon: <FaHtml5 /> },
    { name: 'CSS', category: 'Frontend', icon: <FaCss3Alt /> },
    { name: 'JavaScript', category: 'Frontend', icon: <FaJs /> },
    { name: 'Next.js', category: 'Frontend', icon: <SiNextdotjs /> },
    { name: 'C#', category: 'Backend', icon: <TbBrandCSharp /> },
    { name: 'C++', category: 'Backend', icon: <SiCplusplus /> },
    { name: 'C', category: 'Backend', icon: <SiC /> },
    { name: 'Python', category: 'Backend', icon: <FaPython /> },
    { name: 'Django', category: 'Backend', icon: <SiDjango /> },
    { name: 'ASP.NET', category: 'Backend', icon: <SiDotnet /> },
    { name: 'SQL', category: 'Database', icon: <FaDatabase /> },
    { name: 'Docker', category: 'DevOps', icon: <FaDocker /> },
    { name: 'Bash', category: 'DevOps', icon: <SiGnubash /> },
  ];
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const iconColor: Record<string, string> = {
    'HTML': 'orange.500',
    'CSS': 'blue.500',
    'JavaScript': 'yellow.500',
    'Next.js': 'gray.800',
    'C#': 'purple.600',
    'C++': 'blue.600',
    'C': 'gray.600',
    'Python': 'blue.400',
    'Django': 'green.800',
    'ASP.NET': 'purple.500',
    'SQL': 'red.600',
    'Docker': 'blue.400',
    'Bash': 'gray.700',
  };

  const categoryColor: Record<TechCategory, string> = {
    'Frontend': useColorModeValue('blue.100', 'blue.900'),
    'Backend': useColorModeValue('purple.100', 'purple.900'),
    'Database': useColorModeValue('green.100', 'green.900'),
    'DevOps': useColorModeValue('orange.100', 'orange.900'),
  };
//maxW="1200px"
return (
  <Box id="tech" py={12} px={{ base: 4, md: 8 }} mx="auto" bg={bgColor}>
    <Heading as="h2" size="lg" mb={8} textAlign="center" fontWeight="bold">
      Tech Stack
    </Heading>

    {/* Center the entire SimpleGrid */}
    <Box display="flex" justifyContent="center">
      <SimpleGrid 
        columns={{ base: 2, md: 3, lg: 4 }} 
        spacing={5} 
        maxW="1200px"
        mx="auto"  // Ensures centering if parent is flex
        w="100%"   // Prevents overflow
      >
        {techStack.map((tech) => (
          <Flex
            key={tech.name}
            align="center"
            p={4}
            borderRadius="lg"
            bg={categoryColor[tech.category]}
            boxShadow="md"
            _hover={{ transform: 'translateY(-3px)', transition: 'all 0.2s' }}
            cursor="pointer"
          >
            <Box
              mr={3}
              fontSize="24px"
              color={useColorModeValue(iconColor[tech.name], iconColor[tech.name])}
            >
              {tech.icon}
            </Box>
            <Text fontSize="lg" fontWeight="medium">
              {tech.name}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>

    {/* Category Legend (already centered) */}
    <Flex justify="center" mt={10} wrap="wrap" gap={4}>
      {Object.keys(categoryColor).map((category) => (
        <Flex key={category} align="center">
          <Box
            w="3"
            h="3"
            borderRadius="full"
            bg={useColorModeValue(
              `${category === 'Frontend' ? 'blue' : 
               category === 'Backend' ? 'purple' : 
               category === 'Database' ? 'green' : 'orange'}.500`,
              `${category === 'Frontend' ? 'blue' : 
               category === 'Backend' ? 'purple' : 
               category === 'Database' ? 'green' : 'orange'}.200`
            )}
            mr={2}
          />
          <Text fontSize="sm">{category}</Text>
        </Flex>
      ))}
    </Flex>
  </Box>
);
}

export default TechSection;