import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  Button,
  Grid,
  useToast,
} from '@chakra-ui/core';
import { Formik } from 'formik';
import { SignupSchema } from '../utils/validation';
import { useUser } from '../context/userContext';
import firebase from '../firebase';
import { useRouter } from 'next/router';

const Signup = () => {
  const { setUser } = useUser();
  const router = useRouter();
  const toast = useToast();
  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          let uid = res.user.uid;
          firebase.firestore().collection('users').doc(uid).set({
            user_uid: uid,
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            address: values.address,
            city: values.city,
          });
          setUser(res.user);
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((err) =>
          toast({
            title: 'Error Ocurred.',
            description: err.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        );
      resetForm({});
      setStatus({ success: true });

      // router.push('/signin');
    } catch (error) {
      setStatus({ success: false });
      toast({
        title: 'Error occured.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <Box overflowX='hidden'>
      <Box bg='gray.100' width='100%' height='100vh'>
        <Flex height='100%' align='center' justify='center'>
          <Flex
            bg='white'
            width='1000px'
            borderRadius='lg'
            p={20}
            justify='center'
            flexDirection='column'
            align='center'
            boxShadow='sm'
          >
            <Heading
              fontSize='25px'
              mb={10}
              color='gray.800'
              textAlign='center'
            >
              Sign Up Here
            </Heading>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                address: '',
                email: '',
                password: '',
                password2: '',
                address: '',
                phone: '',
                city: '',
              }}
              onSubmit={onSubmit}
              // validationSchema={SignupSchema}
            >
              {({
                handleSubmit,
                isSubmitting,
                values,
                handleChange,
                handleBlur,
              }) => (
                <Box width='100%'>
                  <form onSubmit={handleSubmit}>
                    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                      <FormControl isRequired>
                        <Input
                          type='text'
                          name='firstName'
                          placeholder='Enter firstname here'
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby='firstName-helper-text'
                          bg='gray.200'
                          h={12}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <Input
                          type='text'
                          name='lastName'
                          placeholder='Enter lastname here'
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby='lastName-helper-text'
                          bg='gray.200'
                          h={12}
                        />
                      </FormControl>
                      <FormControl mt={4} isRequired>
                        <Input
                          type='text'
                          name='email'
                          placeholder='Email'
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby='email-helper-text'
                          bg='gray.200'
                          h={12}
                        />
                      </FormControl>
                      <FormControl mt={4} isRequired>
                        <Input
                          type='password'
                          name='password'
                          placeholder='Password'
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby='password1-helper-text'
                          bg='gray.200'
                          h={12}
                        />
                      </FormControl>
                      <FormControl mt={4} isRequired>
                        <Input
                          type='password'
                          name='password2'
                          placeholder='Confirm Password'
                          value={values.password2}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby='password2-helper-text'
                          bg='gray.200'
                          h={12}
                        />
                      </FormControl>
                      <FormControl mt={4} isRequired>
                        <Input
                          type='text'
                          name='address'
                          placeholder='Address'
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby='address-helper-text'
                          bg='gray.200'
                          h={12}
                        />
                      </FormControl>
                      <FormControl mt={4} isRequired>
                        <Input
                          type='tel'
                          name='phone'
                          placeholder='Phone Number'
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby='phoneNumber-helper-text'
                          bg='gray.200'
                          h={12}
                        />
                      </FormControl>
                      <FormControl mt={4} isRequired>
                        <Input
                          type='text'
                          name='city'
                          placeholder='City'
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby='city-helper-text'
                          bg='gray.200'
                          h={12}
                        />
                      </FormControl>
                    </Grid>
                    <Button
                      type='submit'
                      width='100%'
                      colorScheme='blue'
                      aria-label='submit button'
                      mt={10}
                      h={12}
                      color='#fff'
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
