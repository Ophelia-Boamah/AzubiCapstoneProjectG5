import React from 'react';
import { Grid, Heading, Box, Image, Flex, Text } from '@chakra-ui/core';

const Events = () => {
  return (
    <Grid
      templateColumns='40% 60%'
      w={{ md: '80%' }}
      // mx='auto'
      my={{ md: 8 }}
    >
      <Grid templateColumns='25% 75%' w={{ md: '80%' }} mb={{ md: 2 }}>
        <Box bg='red.400'>
          <Flex flexDir='column' align='center' fontSize='xl'>
            <Text>22</Text>
            <Text>OCT</Text>
          </Flex>
        </Box>
        <Image h={{ md: 40 }} src='/images/windows12.jpg' />
      </Grid>
      <Box>
        <Heading as='h3' fontSize='3xl' mb={{ md: 6 }}>
          Event Title
        </Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          voluptates commodi, ut id nisi iste quo suscipit officiis fugit
          laboriosam?
        </Text>
        <Text color='gray.400'>New Hamphire Avenue, MO, United States</Text>
      </Box>
    </Grid>
  );
};

export default Events;
