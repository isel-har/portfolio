"use client"
import { Box, Heading, Flex, Text, useColorModeValue, Input, Textarea, Button } from '@chakra-ui/react';
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const bgColor = useColorModeValue('gray.30', 'gray.800');
  const inputBg = useColorModeValue('white', 'gray.700');
  const buttonBg = useColorModeValue('blue.500', 'blue.600');
  const buttonHoverBg = useColorModeValue('blue.100', 'blue.900');

  return (
    <Box id="contact" py={12} px={{ base: 4, md: 8 }} mx="auto" bg={bgColor} fontWeight="600" textAlign="center">
      <Heading as="h2" size="lg" mb={8} fontWeight="bold">
        Contact
      </Heading>
      
      <Box maxW="2xl" mx="auto" mb={8}>
        If you have a question or anything, you can send me a message via the Contact Form or you can contact me directly on{" "}
        <Box as="span" fontWeight="semibold" color="#5e9f00">
          ismailhrb1337@gmail.com
        </Box>
      </Box>
  
      <Box 
        maxW="1200px" 
        mx="auto" 
        p={6} 
        borderRadius="lg" 
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow="md"
      >
        <Flex direction="column" gap={5} maxW="800px" mx="auto">
          <Box textAlign="left">
            <Text mb={2} fontWeight="medium">Full Name</Text>
            <Input 
              placeholder="Your name" 
              bg={inputBg}
              size="lg"
              borderRadius="lg"
              _focus={{ borderColor: 'blue.500', boxShadow: 'outline' }}
            />
          </Box>
          <Box textAlign="left">
            <Text mb={2} fontWeight="medium">Email</Text>
            <Input 
              placeholder="your.email@example.com" 
              type="email"
              bg={inputBg}
              size="lg"
              borderRadius="lg"
              _focus={{ borderColor: 'blue.500', boxShadow: 'outline' }}
            />
          </Box>
          <Box textAlign="left">
            <Text mb={2} fontWeight="medium">Message</Text>
            <Textarea 
              placeholder="Your message here..." 
              rows={6}
              bg={inputBg}
              size="lg"
              borderRadius="lg"
              _focus={{ borderColor: 'blue.500', boxShadow: 'outline' }}
            />
          </Box>
          <Button
            bg={buttonBg}
            color="black"
            size="lg"
            borderRadius="lg"
            _hover={{ bg: buttonHoverBg, transform: 'translateY(-2px)', color: "white" }}
            _active={{ transform: 'translateY(0)' }}
            transition="all 0.2s"
            gap={6}
            variant='outline'
            alignSelf="center"
            px={8}
          >
            <FiSend />
            Submit
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactForm;