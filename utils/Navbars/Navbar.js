import React from "react";
import { Flex, Image, Link, Button, Heading } from "@chakra-ui/core";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      zIndex={50}
      px={{ md: 20 }}
      fontWeight="medium"
      fontSize="md"
      boxShadow="md"
      pos="fixed"
      h={{ md: 16 }}
      w="100%"
      bg="white"
    >
      <Heading>A-Teo</Heading>
      <Flex align="center">
        <NextLink href="/" passHref>
          <Link
            _hover={{ textDecor: "none", color: "gray.800" }}
            mr={10}
            color="gray.600"
          >
            Home
          </Link>
        </NextLink>
        <NextLink href="/signin">
          <Link
            _hover={{ textDecor: "none", color: "gray.800" }}
            mr={10}
            color="gray.600"
          >
            SignIn
          </Link>
        </NextLink>
        <Link
          href="/signup"
          _hover={{ textDecor: "none", color: "gray.800" }}
          mr={10}
          color="gray.600"
        >
          SignUp
        </Link>
        <Button colorScheme="blue">Logout</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;