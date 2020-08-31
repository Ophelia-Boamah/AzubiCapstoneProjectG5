import { Box, Input, Flex, Heading } from "@chakra-ui/core";

export default function Home() {
  return (
    <Box bg="blue.400" h="100vh">
      <Flex
        bg="#fff"
        w="50%"
        h="50%"
        mx="auto"
        p={{ md: 20 }}
        align="center"
        justify="center"
        flexDir="column"
      >
        <Heading mb={10}>Sign in to your account</Heading>
        <Input placeholder="Email address" />
        <br />
        <Input placeholder="Password" />
      </Flex>
    </Box>
  );
}
