import React from 'react';
import { Grid, Image, Box, Text, Flex } from '@chakra-ui/core';

const Topevents = () => {
  return (
    <div>
      <Flex w={{ md: '80%' }} py={{ md: 4 }} borderBottom='1px solid #CBD5E0'>
        <Image src='/images/windows11.jpg' h={{ md: 24 }} />
        <Box pl={{ md: 6 }}>
          <Text mb={{ md: 3 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            voluptates commodi...
          </Text>
          <Text fontSize='sm' color='gray.500'>
            New Hamphire Avenue, MO, United States
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Topevents;
