import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  FormLabel,
  Button,
  Text,
  Link,
  useToast,
} from "@chakra-ui/core";
import { Formik } from "formik";
import Axios from "axios";
import { SignInSchema } from "../utils/validation";

const Signin = () => {
  const toast = useToast();
  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      await Axios.post("http://52.165.239.221/api/v1/rest-auth/login/", values);
      resetForm({});
      setStatus({ success: true });
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      console.log(values);
    } catch (error) {
      setStatus({ success: false });
      toast({
        title: "Error occured.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

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
              initialValues={{ email: "", password: "" }}
              onSubmit={onSubmit}
              validationSchema={SignInSchema}
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
                      aria-describedby="email-helper-text"
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
                      colorScheme="blue"
                      aria-label="submit button"
                      mt={20}
                      color="#fff"
                      isLoading={isSubmitting}
                    >
                      Sign in to your account
                    </Button>
                    <Text borderTop="1px solid #888" p={4} mt={6}>
                      Don't have an account?{" "}
                      <Link color="blue.600" href="/signup">
                        Sign Up!
                      </Link>
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
