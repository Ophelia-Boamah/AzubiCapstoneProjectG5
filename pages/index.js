import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  FormControl,
  Grid,
} from "@chakra-ui/core";

import { Formik } from "formik";

export default function Home() {
  return (
    <Box
      bg="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/images/eventreg.jpg')"
      bgPos="center"
      bgSize="cover"
      h="100vh"
      w="100%"
      color="#fff"
      overflowX="hidden"
    >
      <Flex align="center" justify="center" px={10} py={40}>
        <Box mb={20} textAlign="center">
          <Heading as="h1" fontSize="6xl">
            Your go-to partner for fast, easy, <br />
            successful event registration.
          </Heading>
          <Text fontSize="xl" py={6}>
            Our simple online event registration platform is powered by a team
            of <br /> experts who give off their best daily because of you.
          </Text>

          <Grid
            templateColumns="repeat(2, 1fr)"
            w={{ md: "80%" }}
            gap={6}
            mx="auto"
          >
            <Button
              type="submit"
              height={16}
              colorScheme="green"
              aria-label="submit button"
              mt={10}
              color="#fff"
              // isLoading={isSubmitting}
            >
              Check out Events
            </Button>
            <Button
              type="submit"
              height={16}
              colorScheme="red"
              aria-label="submit button"
              mt={10}
              color="#fff"
              // isLoading={isSubmitting}
            >
              Get a Ticket
            </Button>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}
