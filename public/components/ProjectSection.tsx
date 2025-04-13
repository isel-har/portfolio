"use client";

import { Box, Heading, SimpleGrid, Text, Image, useColorModeValue, Link, Flex, Badge, UnorderedList, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Modal, ModalBody, ModalOverlay, ModalContent, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  keyFeatures: string[];
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
}

const ProjectsSection = () => {
  const projectBg = useColorModeValue('gray.50', 'gray.700');
  const projectBorder = useColorModeValue('gray.200', 'gray.600');
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImgClick = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    onOpen();
  };

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store built with ASP.NET MVC implementing server-side rendering and optimized SQL query for optimal performance',
      keyFeatures: [
        'Product catalog with search, filters, and pagination',
        'Authentication and session management',
        'Secure checkout process with form validation',
        'User profile and orders processing',
        'Responsive design with Bootstrap'
      ],
      imageUrl: '../assets/Ecommerce.png',
      technologies: ['ASP.NET', 'SQL Server', 'Razor', 'JQuery', 'Bootstrap'],
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/isel-har/E-commerce_asp_mvc'
    },
    {
      title: 'Ping Pong Game',
      description: 'Multiplayer online ping pong game developed as final project for 1337 Coding School',
      keyFeatures: [
        'Real-time gameplay using WebSockets',
        'User authentication with OAuth 2.0',
        'Two-factor authentication (2FA) implementation',
        'Remote Tournament system',
        'Responsive UI with Next.js and Tailwind CSS'
      ],
      imageUrl: '../assets/pong_screen4.png',
      technologies: ['Django', 'Next.js', 'Postgres', 'WebSockets'],
      projectUrl: 'https://trans-dep-frontend.vercel.app/',
      githubUrl: 'https://github.com/isel-har/trans_dep_backend'
    },
    {
      title: 'Inception',
      description: 'DevOps project containerizing services using Docker',
      keyFeatures: [
        'Multi-container architecture with Docker',
        'Automated deployment scripts',
        'Service isolation and networking',
        'Resource optimization configuration',
        'Bash scripting for automation'
      ],
      imageUrl: '../assets/inception.webp',
      technologies: ['Docker', 'Bash', 'Linux'],
      projectUrl: 'https://example.com/weather'
    },
    {
      title: 'IRC Server',
      description: 'Custom IRC server implementation supporting multi-client communication',
      keyFeatures: [
        'Low level Socket programming',
        'User authentication system',
        'Channel creation and management',
        'Basic chat commands implementation',
        'Cross-platform compatibility'
      ],
      imageUrl: '../assets/IRC.png',
      technologies: ['C/C++', 'Socket Programming'],
      projectUrl: 'none',
      githubUrl: 'https://github.com/isel-har/ft_irc'
    },
    {
      title: 'Cub3D',
      description: '3D game engine using raycasting technique',
      keyFeatures: [
        'Raycasting implementation for 3D perspective',
        'Texture mapping and sprite rendering',
        'Custom map parsing and validation',
        'Player movement and collision detection',
        'Minimap display feature',
      ],
      imageUrl: './assets/cub3d.png',
      technologies: ['C', 'Raycasting', 'Graphics'],
      githubUrl: 'https://github.com/isel-har/Cub_3d'
    },
    {
      title: 'minishell',
      description: 'Lightweight Unix shell implementation',
      keyFeatures: [
        'Command parsing and execution',
        'Environment variable support',
        'Process handling (fork, execve, waitpid)',
        'Input/output redirection',
        'Pipeline implementation'
      ],
      imageUrl: '../assets/minishell.png',
      technologies: ['C', 'Unix', 'System Programming'],
      projectUrl: 'none',
      githubUrl: 'https://github.com/raskoln1kov/minishell'
    },
  ];

  return (
    <Box id="projects" py={16} px={{ base: 4, md: 8, lg: 12 }} bg={bgColor} fontWeight="600">
      <Box maxW="1200px" mx="auto">
        <Heading as="h2" size="xl" mb={8} textAlign="center" fontWeight="bold" position="relative">
          Featured Projects
          <Box 
            as="span" 
            position="absolute" 
            bottom="-8px" 
            left="50%" 
            transform="translateX(-50%)"
            width="60px" 
            height="4px" 
            bg={useColorModeValue('blue.500', 'blue.300')}
            borderRadius="full"
          />
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg={projectBg}
              borderWidth="1px"
              borderColor={projectBorder}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              transition="all 0.3s ease-out"
              _hover={{ 
                transform: 'translateY(-5px)', 
                boxShadow: 'xl',
              }}
              position="relative"
              h="100%"
              display="flex"
              flexDirection="column"
            >
              <Box 
                overflow="hidden" 
                position="relative"
                cursor="pointer"
              >
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  objectFit="cover" 
                  h="240px"
                  w="100%"
                  transition="all 0.3s ease-out"
                  _hover={{
                    transform: 'scale(1.05)'
                  }}
                  onClick={() => handleImgClick(project.imageUrl)}
                />
              </Box>
              
              <Box p={5} flexGrow={1} display="flex" flexDirection="column">
                <Heading as="h3" size="md" mb={3}>
                  {project.title}
                </Heading>
                
                <Text mb={3} color={useColorModeValue('gray.600', 'gray.300')}>
                  {project.description}
                </Text>

                <Heading as="h4" size="sm" mb={2} mt={3} fontWeight="semibold">
                  Key Features:
                </Heading>
                <UnorderedList mb={4} spacing={1} pl={5}>
                  {project.keyFeatures.map((feature, i) => (
                    <ListItem key={i} fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
                      {feature}
                    </ListItem>
                  ))}
                </UnorderedList>
                
                <Flex wrap="wrap" gap={2} mb={4}>
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      colorScheme="blue" 
                      variant="subtle" 
                      px={2} 
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>
                
                <Flex justify="space-between" mt="auto">
                  {project.projectUrl && project.projectUrl !== 'none' && (
                    <Link 
                      href={project.projectUrl} 
                      isExternal
                      color={useColorModeValue('blue.600', 'blue.300')}
                      fontWeight="medium"
                      display="flex"
                      alignItems="center"
                      fontSize="sm"
                    >
                      Live Demo <ExternalLinkIcon mx={1} />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link 
                      href={project.githubUrl} 
                      isExternal
                      color={useColorModeValue('blue.600', 'blue.300')}
                      fontWeight="medium"
                      display="flex"
                      alignItems="center"
                      fontSize="sm"
                    >
                      View Code <ExternalLinkIcon mx={1} />
                    </Link>
                  )}
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
          <ModalOverlay bg="blackAlpha.700" />
          <ModalContent mx={4} bg="transparent" boxShadow="none">
            <ModalBody p={0} display="flex" justifyContent="center">
              {selectedImage && (
                <Image 
                  src={selectedImage} 
                  alt="Enlarged project preview" 
                  objectFit="contain" 
                  maxW="100%"
                  maxH="90vh"
                  borderRadius="lg"
                />
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default ProjectsSection;