import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/core";
import { Formik } from "formik";

const Signin = () => {
  return (
    <Box overflowX="hidden">
      <Box bg="green.400" width="100%" height="100vh">
        <Flex height="100%" align="center" justify="center">
          <Flex
            bg="white"
            width="500px"
            borderRadius="lg"
            p={20}
            justify="center"
            flexDirection="column"
            align="center"
            boxShadow="xl"
          >
            <Heading fontSize="25px" mb={4} textAlign="center">
              Sign in to your account
            </Heading>
            <Formik
            // enableReinitialize
            // initialValues={{ UserCode: data.Usercode, Url: data.Url }}
            // onSubmit={onSubmit}
            >
              <Box width="100%">
                <form>
                  <FormControl isRequired>
                    <FormLabel htmlFor="number">Email Address</FormLabel>
                    <Input
                      type="email"
                      name="Email"
                      // isDisabled
                      placeholder="Enter email here"
                      // value={values.UserCode}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      aria-describedby="userCode-helper-text"
                    />
                  </FormControl>
                  <FormControl mt={4} isRequired>
                    <FormLabel htmlFor="url">Password</FormLabel>
                    <Input
                      type="password"
                      name="Password"
                      placeholder="Enter password here"
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
                    // isLoading={isSubmitting}
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            </Formik>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Signin;
