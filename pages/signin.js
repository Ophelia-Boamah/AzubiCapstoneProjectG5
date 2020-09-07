import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
  Link,
} from "@chakra-ui/core";
import { Formik } from "formik";

const Signin = () => {
  return (
    <Box overflowX="hidden">
      <Box bg="#fff" width="100%" height="100vh">
        <Flex height="100%" align="center" justify="center">
          <Flex
            bg="gray.50"
            width="500px"
            borderRadius="lg"
            p={20}
            justify="flex-start"
            flexDirection="column"
            align="center"
            boxShadow="xl"
          >
            <Heading fontSize="25px" mb={10}>
              Sign in to your account
            </Heading>
            <Formik
              enableReinitialize
              initialValues={{ email: "", password: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                handleBlur,
                handleChange,
                isSubmitting,
                values,
                handleSubmit,
              }) => (
                <Box width="100%">
                  <form onSubmit={handleSubmit}>
                    <FormLabel htmlFor="number">Your Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-describedby="userCode-helper-text"
                    />
                    <FormLabel htmlFor="url" mt={4}>
                      Your Password
                    </FormLabel>
                    <Input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-describedby="url-helper-text"
                    />
                    <Button
                      type="submit"
                      width="100%"
                      bg="blue.600"
                      aria-label="submit button"
                      mt={20}
                      color="#fff"
                      isLoading={isSubmitting}
                    >
                      Sign in to your account
                    </Button>
                    <Text borderTop="1px solid #888" p={4} mt={6}>
                      Don't have an account?{" "}
                      <Link color="blue.600">Sign Up!</Link>
                    </Text>
                  </form>
                </Box>
              )}
            </Formik>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Signin;
