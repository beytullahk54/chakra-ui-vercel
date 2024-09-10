import {
    Box,
    Flex,
    VStack,
    Divider,
    Heading,
    Button,
    useColorMode,
    IconButton,
    HStack,
    Text,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
  } from '@chakra-ui/react';
  import { FiHome, FiBell, FiSettings, FiLogOut, FiMenu } from 'react-icons/fi';
  import { FaMoon, FaSun } from 'react-icons/fa';
  import Link from 'next/link';
  import { useRouter } from 'next/router';
  
  const Layout = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Flex h="100vh" flexDir="row" overflow="hidden">
        {/* Sidebar - Mobil için Drawer */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="gray.800" color="white">
            <DrawerCloseButton />
            <DrawerHeader>Kodlooper</DrawerHeader>
            <DrawerBody>
              <VStack spacing="6" alignItems="flex-start">
                <Link href="/" passHref>
                  <Button
                    leftIcon={<FiHome />}
                    w="full"
                    bg="transparent"
                    _hover={{ bg: 'gray.600' }}
                    justifyContent="flex-start"
                  >
                    Anasayfa
                  </Button>
                </Link>
                <Link href="/destek" passHref>
                  <Button
                    leftIcon={<FiBell />}
                    w="full"
                    bg="transparent"
                    _hover={{ bg: 'gray.600' }}
                    justifyContent="flex-start"
                  >
                    Destek Talepleri
                  </Button>
                </Link>
                <Link href="/projeler" passHref>
                  <Button
                    leftIcon={<FiSettings />}
                    w="full"
                    bg="transparent"
                    _hover={{ bg: 'gray.600' }}
                    justifyContent="flex-start"
                  >
                    Projeler
                  </Button>
                </Link>
                <Button
                  leftIcon={<FiLogOut />}
                  w="full"
                  bg="transparent"
                  _hover={{ bg: 'gray.600' }}
                  justifyContent="flex-start"
                >
                  Çıkış Yap
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
  
        {/* Sidebar - Desktop görünüm */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          w="250px"
          flexDir="column"
          alignItems="center"
          bg="gray.800"
          color="white"
        >
          <Box my="4">
            <Heading size="lg" color="white">
              Kodlooper
            </Heading>
          </Box>
          <Divider />
          <VStack spacing="6" mt="4" alignItems="flex-start" w="full" px="4">
            <Link href="/" passHref>
              <Button
                leftIcon={<FiHome />}
                w="full"
                bg="transparent"
                _hover={{ bg: 'gray.600' }}
                justifyContent="flex-start"
                color="white"
              >
                Anasayfa
              </Button>
            </Link>
            <Link href="/destek" passHref>
              <Button
                leftIcon={<FiBell />}
                w="full"
                bg="transparent"
                _hover={{ bg: 'gray.600' }}
                justifyContent="flex-start"
                color="white"
              >
                Destek Talepleri
              </Button>
            </Link>
            <Link href="/projeler" passHref>
              <Button
                leftIcon={<FiSettings />}
                w="full"
                bg="transparent"
                _hover={{ bg: 'gray.600' }}
                justifyContent="flex-start"
                color="white"
              >
                Projeler
              </Button>
            </Link>
            <Button
              leftIcon={<FiLogOut />}
              w="full"
              bg="transparent"
              _hover={{ bg: 'gray.600' }}
              justifyContent="flex-start"
              color="white"
            >
              Çıkış Yap
            </Button>
          </VStack>
        </Flex>
  
        {/* Main Content */}
        <Flex flex="1" flexDir="column" bg="gray.100" p="6">
          <HStack justifyContent="space-between">
            {/* Mobil için hamburger menü butonu */}
            <IconButton
              icon={<FiMenu />}
              aria-label="Menu"
              variant="outline"
              display={{ base: 'inline-flex', md: 'none' }}
              onClick={onOpen}
            />
          </HStack>
  
          {/* Sayfaların ana içeriği burada gösterilir */}
          <Box mt="4">{children}</Box>
        </Flex>
      </Flex>
    );
  };
  
  export default Layout;
  