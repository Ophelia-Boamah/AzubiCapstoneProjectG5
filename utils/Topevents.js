import React from 'react';
import { Grid, Image, Box, Text, Flex } from '@chakra-ui/core';

const Topevents = ({ location, title, img, time }) => {
  return (
    <div>
      <Flex w={{ md: '100%' }} py={{ md: 4 }} borderBottom='1px solid #CBD5E0'>
        <Image src={img} h={{ md: 24 }} w={{ md: 48 }} objectFit='cover' />
        <Box pl={{ md: 6 }}>
          <Text mb={{ md: 3 }}>{title}</Text>
          <Box>
            <Text fontSize='sm' color='gray.500' as='span'>
              {location}
            </Text>
            <Text fontSize='sm' color='gray.500'>
              {time}
            </Text>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

// New Hamphire Avenue, MO, United States
export default Topevents;
