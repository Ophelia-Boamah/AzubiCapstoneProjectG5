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
      <Box bg="green.400" width="100%" height="100vh">
        <Flex height="100%" align="center" justify="center">
          <Flex
            bg="white"
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
            // enableReinitialize
            // initialValues={{ UserCode: data.Usercode, Url: data.Url }}
            // onSubmit={onSubmit}
            >
              <Box width="100%">
                <form>
                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <FormControl isRequired>
                      <Input
                        type="text"
                        name="First Name"
                        // isDisabled
                        placeholder="Enter firstname here"
                        // value={values.UserCode}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        aria-describedby="userCode-helper-text"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <Input
                        type="text"
                        name="Last Name"
                        // isDisabled
                        placeholder="Enter lastname here"
                        // value={values.UserCode}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        aria-describedby="userCode-helper-text"
                      />
                    </FormControl>
                  </Grid>
                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <FormControl mt={4} isRequired>
                      <Input
                        type="text"
                        name="Email"
                        placeholder="Email"
                        // value={values.Url}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        aria-describedby="url-helper-text"
                      />
                    </FormControl>
                    <FormControl mt={4} isRequired>
                      <Input
                        type="password"
                        name="Password"
                        placeholder="Password"
                        // value={values.Url}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        aria-describedby="url-helper-text"
                      />
                    </FormControl>
                  </Grid>
                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <FormControl mt={4} isRequired>
                      <Input
                        type="password"
                        name="Password"
                        placeholder="Confirm Password"
                        // value={values.Url}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        aria-describedby="url-helper-text"
                      />
                    </FormControl>
                    <FormControl mt={4} isRequired>
                      <Input
                        type="text"
                        name="Address"
                        placeholder="Address"
                        // value={values.Url}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        aria-describedby="url-helper-text"
                      />
                    </FormControl>
                  </Grid>
                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <FormControl mt={4} isRequired>
                      <Input
                        type="tel"
                        name="Phone Number"
                        placeholder="Phone Number"
                        // value={values.Url}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        aria-describedby="url-helper-text"
                      />
                    </FormControl>
                    <FormControl mt={4} isRequired>
                      <Input
                        type="text"
                        name="City"
                        placeholder="City"
                        // value={values.Url}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        aria-describedby="url-helper-text"
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

export default Signup;
