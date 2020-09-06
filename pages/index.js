import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";

import { Formik } from "formik";

export default function Home() {
  return (
    <Box
      bg="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/images/conferencepeeps.jpg')"
      bgPos="center"
      bgSize="cover"
      h="100vh"
      w="100%"
      color="#fff"
      overflowX="hidden"
    >
      <Flex align="center" justify="space-between" px={10} py={40}>
        <Box mb={20}>
          <Heading as="h1" fontSize="85px" lineHeights="shorter">
            2019 NATIONAL
          </Heading>
          <Heading as="h1" fontSize="100px">
            CONFERENCE
          </Heading>
          <Heading as="h2" fontSize="30px">
            NOVEMBER 21-24,2019
          </Heading>
          <Text py={6}>
            A surprisingly informed and slightly unexpected startup conference
          </Text>
          <Button bg="red.300" px={10}>
            Sign In
          </Button>
        </Box>
        <Flex
          bg="white"
          width="500px"
          borderRadius="lg"
          p={20}
          justify="center"
          flexDirection="column"
          align="center"
          boxShadow="xl"
          color="#000"
        >
          <Heading fontSize="25px" mb={4} textAlign="center">
            REGISTER NOW
          </Heading>
          <Formik
          // enableReinitialize
          // initialValues={{ UserCode: data.Usercode, Url: data.Url }}
          // onSubmit={onSubmit}
          >
            <Box width="100%">
              <FormControl isRequired>
                <Input
                  type="text"
                  name="Text"
                  // isDisabled
                  placeholder="Your Name"
                  // value={values.UserCode}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  aria-describedby="userCode-helper-text"
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <Input
                  type="password"
                  name="Email"
                  placeholder="Enter password here"
                  // value={values.Url}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  aria-describedby="url-helper-text"
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <Input
                  type="password"
                  name="Email"
                  placeholder="Phone Number"
                  // value={values.Url}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  aria-describedby="url-helper-text"
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <Input
                  type="password"
                  name="Email"
                  placeholder="Phone Number"
                  // value={values.Url}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  aria-describedby="url-helper-text"
                />
              </FormControl>
              <Button
                type="submit"
                width="100%"
                variantColor="green"
                aria-label="submit button"
                mt={10}
                bg="red.300"
                color="#fff"
                // isLoading={isSubmitting}
              >
                Submit
              </Button>
            </Box>
          </Formik>
        </Flex>
      </Flex>
    </Box>
  );
}
