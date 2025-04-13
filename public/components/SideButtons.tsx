'use client';

import { Flex, VStack, Button } from "@chakra-ui/react";
import { Linkedin, Github } from "lucide-react";
import { RiDiscordLine  } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { useColorModeValue } from "@chakra-ui/react";

const Sidebar = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  return (
    <Flex
      direction="column"
      w="60px"
      h="100vh"
      // bg="white"
      zIndex={1}
      _dark={{ bg: "gray.800" }}
      justify="center"      // centers vertically
      align="center"        // centers horizontally
      position="fixed"
      left={0}
      top={0}
      bgColor={bgColor}
    >
      <VStack spacing={4} align="stretch" w="full" px={4}>
        <Button
          leftIcon={<Linkedin size={24} />}
          variant='link'
          _hover={{ transform: "scale(1.2)" }}
          transition="transform 0.2s ease" 
          cursor="pointer"
          onClick={() => window.open("https://www.linkedin.com/in/ismail-elharrab-50a05a314/", "_blank")}
          // color="black"
        />
        <Button
          leftIcon={<Github size={24} />}
          variant='link'
          _hover={{ transform: "scale(1.2)" }}
          transition="transform 0.2s ease" 
          cursor="pointer"
          onClick={() => window.open("https://github.com/isel-har", "_blank")}
        />
        <Button
          leftIcon={<RiDiscordLine size={24} />}
          variant='link'
            _hover={{ transform: "scale(1.2)" }}
            transition="transform 0.2s ease" 
            cursor="pointer"
            // onClick={() => window.open("")}
        />
        <Button
          leftIcon={<BiLogoGmail  size={24} />}
          variant='link'
            _hover={{ transform: "scale(1.2)" }}
            transition="transform 0.2s ease"
            cursor="pointer"
            onClick={() => window.open("mailto:ismailhrb1337@gmail.com")}
        />
      </VStack>
    </Flex>
  );
};

export default Sidebar;
