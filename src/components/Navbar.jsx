import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
const Links = ['Apod', 'Mars'];

const NavLink = ({ href, children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'grey',
    }}
    href={href}
  >
    {children}
  </Link>
);
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#1e1e1e;" color={'white'} px={4} width={"100%"}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          width={"100%"}
        >
          <IconButton
            size={'md'}
            icon={
              isOpen ? (
                <CloseIcon background={'#1e1e1e'} />
              ) : (
                <HamburgerIcon
                  background={'#1e1e1e'}
                  _hover={{ bg: '#1e1e1e' }}
                />
              )
            }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            background={'#1e1e1e'}
            _hover={{ bg: '#1e1e1e' }}
          />
          <Box display={'flex'} justifyContent="space-between" width={'full'}>
            <Box p="10px">
              <Link href="/" textDecor={'none'} _hover={{ textDecor: 'none' }}>
                Nasa api explorer
              </Link>
            </Box>
            <HStack
              as={'div'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              justifyContent="space-between"
            >
              <Box>
                {Links.map(link => (
                  <NavLink key={link} href={`/${link}`}>
                    {link}
                  </NavLink>
                ))}
              </Box>
            </HStack>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link} href={link}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
