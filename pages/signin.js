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
  Divider,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import { Formik } from "formik";
import Axios from "axios";
import { SignInSchema } from "../utils/validation";
import firebase from "../firebase";

const Signin = ({ setUser }) => {
  const router = useRouter();
  const toast = useToast();
  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      const result = await Axios.post("http://13.89.50.97/api/login/", values);
      window.localStorage.setItem("auth", JSON.stringify(result.data.token));
      setUser(result.data);
      resetForm({});
      setStatus({ success: true });
      toast({
        title: "Login Successful.",
        description: `Welcome ${result.data.first_name}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      router.push("/events");
      window.location.reload();
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
      <Box bg="gray.100" width="100%" height="100vh">
        <Flex height="100%" align="center" justify="center">
          <Flex
            bg="white"
            width="500px"
            borderRadius="lg"
            p={20}
            justify="flex-start"
            flexDirection="column"
            align="center"
            boxShadow="sm"
          >
            <Heading fontSize="25px" mb={10}>
              Sign in to your account
            </Heading>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={onSubmit}
              // validationSchema={SignInSchema}
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
                    <FormLabel htmlFor="username">Your Username</FormLabel>
                    <Input
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-describedby="username-helper-text"
                      h={12}
                    />
                    <FormLabel htmlFor="password" mt={4}>
                      Your Password
                    </FormLabel>
                    <Input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-describedby="password-helper-text"
                      h={12}
                    />
                    <Button
                      type="submit"
                      width="100%"
                      colorScheme="blue"
                      aria-label="submit button"
                      mt={6}
                      h={12}
                      color="#fff"
                      isLoading={isSubmitting}
                    >
                      Sign in to your account
                    </Button>
                    <Divider
                      pt={8}
                      borderColor="gray.300"
                      orientation="horizontal"
                    />
                    <Text mt={6}>
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
