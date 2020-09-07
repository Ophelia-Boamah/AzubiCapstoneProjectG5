import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Grid,
} from "@chakra-ui/core";
import { Formik } from "formik";

const Signup = () => {
  return (
    <Box overflowX="hidden">
      <Box bg="#fff" width="100%" height="100vh">
        <Flex height="100%" align="center" justify="center">
          <Flex
            bg="gray.50"
            width="1000px"
            borderRadius="lg"
            p={20}
            justify="center"
            flexDirection="column"
            align="center"
            boxShadow="xl"
          >
            <Heading fontSize="25px" mb={4} textAlign="center">
              Sign Up Here
            </Heading>
            <Formik
              enableReinitialize
              initialValues={{
                firstName: "",
                lastName: "",
                address: "",
                email: "",
                password: "",
                confirmPassword: "",
                address: "",
                phoneNumber: "",
                city: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                handleSubmit,
                isSubmitting,
                values,
                handleChange,
                handleBlur,
              }) => (
                <Box width="100%">
                  <form onSubmit={handleSubmit}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                      <FormControl isRequired>
                        <Input
                          type="text"
                          name="firstName"
                          placeholder="Enter firstname here"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="firstName-helper-text"
                          bg="gray.200"
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <Input
                          type="text"
                          name="lastName"
                          placeholder="Enter lastname here"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="lastName-helper-text"
                          bg="gray.200"
                        />
                      </FormControl>
                    </Grid>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                      <FormControl mt={4} isRequired>
                        <Input
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="email-helper-text"
                          bg="gray.200"
                        />
                      </FormControl>
                      <FormControl mt={4} isRequired>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={values.Url}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="password-helper-text"
                          bg="gray.200"
                        />
                      </FormControl>
                    </Grid>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                      <FormControl mt={4} isRequired>
                        <Input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="confirmPassword-helper-text"
                          bg="gray.200"
                        />
                      </FormControl>
                      <FormControl mt={4} isRequired>
                        <Input
                          type="text"
                          name="address"
                          placeholder="Address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="address-helper-text"
                          bg="gray.200"
                        />
                      </FormControl>
                    </Grid>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                      <FormControl mt={4} isRequired>
                        <Input
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="phoneNumber-helper-text"
                          bg="gray.200"
                        />
                      </FormControl>
                      <FormControl mt={4} isRequired>
                        <Input
                          type="text"
                          name="city"
                          placeholder="City"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby="city-helper-text"
                          bg="gray.200"
                        />
                      </FormControl>
                    </Grid>
                    <Button
                      type="submit"
                      width="40%"
                      ml="30%"
                      bg="green.400"
                      aria-label="submit button"
                      mt={10}
                      isLoading={isSubmitting}
                    >
                      Submit
                    </Button>
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

export default Signup;
