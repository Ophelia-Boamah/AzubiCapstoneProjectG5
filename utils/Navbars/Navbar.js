import React from 'react';
import { Flex, Link, Button, Heading } from '@chakra-ui/core';
import NextLink from 'next/link';

const Navbar = () => {
  const [auth, setAuth] = React.useState(false);
  return (
    <Flex
      as='header'
      align='center'
      justify='space-between'
      zIndex={50}
      px={{ md: 20 }}
      fontWeight='medium'
      fontSize='md'
      boxShadow='md'
      pos='fixed'
      h={{ md: 16 }}
      w='100%'
      bg='white'
    >
      <NextLink href='/' passHref>
        <Link
          _hover={{ textDecor: 'none', color: 'gray.800' }}
          mr={10}
          color='gray.600'
        >
          <Heading>A-Teo</Heading>
        </Link>
      </NextLink>
      <Flex align='center'>
        <NextLink href='/signin' passHref>
          <Link
            _hover={{ textDecor: 'none', color: 'gray.800' }}
            mr={10}
            color='gray.600'
          >
            SignIn
          </Link>
        </NextLink>
        <NextLink href='/signup' passHref>
          <Link
            _hover={{ textDecor: 'none', color: 'gray.800' }}
            mr={10}
            color='gray.600'
          >
            SignUp
          </Link>
        </NextLink>
        {auth && <Button colorScheme='blue'>Logout</Button>}
      </Flex>
    </Flex>
  );
};

export default Navbar;