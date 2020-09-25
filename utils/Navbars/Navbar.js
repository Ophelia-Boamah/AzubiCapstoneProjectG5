import React from 'react';
import { Flex, Link, Button, Heading, Box, Text } from '@chakra-ui/core';
import NextLink from 'next/link';
import useAuth from '../../context/userContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

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
        <NextLink href='/events' passHref>
          <Link
            _hover={{ textDecor: 'none', color: 'gray.800' }}
            mr={10}
            color='gray.600'
          >
            Events
          </Link>
        </NextLink>
      </Flex>
      <Flex align='center'>
        {!isAuthenticated ? (
          <Flex>
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
          </Flex>
        ) : (
          <Flex align='center'>
            <Box mr={8}>
              <Text>Welcome back, {user.username}</Text>
            </Box>
            <Button colorScheme='blue' onClick={logout}>
              Logout
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
