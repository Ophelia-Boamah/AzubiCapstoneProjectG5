import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  Button,
  Grid,
  useToast
} from '@chakra-ui/core'
import { Formik } from 'formik'
import Axios from 'axios'
import { SignupSchema } from '../utils/validation'

const Signup = () => {
  const toast = useToast()
  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      await Axios.post(
        'http://52.165.239.221/api/v1/rest-auth/registration/',
        values
      )
      resetForm({})
      setStatus({ success: true })
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true
      })
      console.log(values)
    } catch (error) {
      setStatus({ success: false })
      toast({
        title: 'Error occured.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true
      })
      setSubmitting(false)
      setErrors({ submit: error.message })
    }
  }

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
                first_name: '',
                last_name: '',
                address: '',
                email: '',
                password: '',
                password2: '',
                address: '',
                phone: '',
                city: ''
              }}
              onSubmit={onSubmit}
              validationSchema={SignupSchema}
            >
              {({
                handleSubmit,
                isSubmitting,
                values,
                handleChange,
                handleBlur
              }) => (
                <Box width='100%'>
                  <form onSubmit={handleSubmit}>
                    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                      <FormControl isRequired>
                        <Input
                          type='text'
                          name='first_name'
                          placeholder='Enter firstname here'
                          value={values.first_name}
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
                          name='last_name'
                          placeholder='Enter lastname here'
                          value={values.last_name}
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
  )
}

export default Signup
