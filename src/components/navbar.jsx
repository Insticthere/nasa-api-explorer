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
  const Links = ['Apod', 'Mars' ];
  
  const NavLink = ({ href, children }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
      textDecoration: 'none',
      bg: 'grey',
    }}
    href={href}>
      {children}
    </Link>
  );
  
  export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box bg="#383a44;" color={'white'} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} _hover={{bg: '#383a44'}}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon background={'#383a44'}/> : <HamburgerIcon background={'#383a44'} _hover={{bg: '#383a44'}}/>}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              background={'#383a44'}
              _hover={{bg: '#383a44'}}
            />
            <Box display={'flex'}  justifyContent="space-between">
              <Box p='10px'><Link href='/' textDecor={'none'} _hover={{textDecor: 'none'}}>Nasa api explorer</Link></Box>
              <HStack
                as={'div'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }} justifyContent="space-between">
                <Box>
                    {Links.map((link) => (
                    <NavLink key={link} href={`/${link}`}>{link}</NavLink>
                    ))}
                </Box>
              </HStack>
            </Box>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link} href={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }