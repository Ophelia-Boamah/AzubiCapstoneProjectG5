import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  FormControl,
} from '@chakra-ui/core';

import { Formik } from 'formik';

const register = () => {
  return (
    <Box
      bg="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/images/conferencepeeps.jpg')"
      bgPos='center'
      bgSize='cover'
      h='100vh'
      w='100%'
      color='#fff'
      overflowX='hidden'
    >
      <Flex align='center' justify='space-between' px={10} py={40}>
        <Box mb={20}>
          <Heading as='h1' fontSize='85px'>
            2021 NATIONAL
          </Heading>
          <Heading as='h1' fontSize='100px'>
            CONFERENCE
          </Heading>
          <Heading as='h2' fontSize='30px'>
            NOVEMBER 21-24,2021
          </Heading>
          <Text py={6}>
            A surprisingly informed and slightly unexpected startup conference
          </Text>
          <Button bg='red.300' px={10}>
            Sign In
          </Button>
        </Box>
        <Flex
          bg='white'
          width='500px'
          borderRadius='lg'
          p={20}
          justify='center'
          flexDirection='column'
          align='center'
          boxShadow='xl'
          color='#000'
        >
          <Heading fontSize='25px' mb={4} textAlign='center'>
            REGISTER NOW
          </Heading>
          <Formik
            enableReinitialize
            initialValues={{ name: '', email: '', phone: '', ticket: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              values,
            }) => (
              <Box width='100%'>
                <form>
                  <FormControl isRequired>
                    <Input
                      type='text'
                      name='name'
                      placeholder='Your Name'
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-describedby='name-helper-text'
                    />
                  </FormControl>
                  <FormControl mt={4} isRequired>
                    <Input
                      type='email'
                      name='email'
                      placeholder='Email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-describedby='email-helper-text'
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
                      aria-describedby='phone-helper-text'
                    />
                  </FormControl>
                  <FormControl mt={4} isRequired>
                    <Input
                      type='number'
                      name='ticket'
                      placeholder='Ticket'
                      value={values.ticket}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-describedby='ticket-helper-text'
                    />
                  </FormControl>
                  <Button
                    type='submit'
                    width='100%'
                    variantColor='green'
                    aria-label='submit button'
                    mt={10}
                    bg='red.300'
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
  );
};

export default register;
