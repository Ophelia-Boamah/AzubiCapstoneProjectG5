import React from 'react';
import { Grid, Heading, Box, Image, Flex, Text, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

const EventCard = ({ title, text, location, href }) => {
  return (
    <NextLink passHref href='/events/[id]' as={`/events/${href}`}>
      <Link>
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
              {title}
            </Heading>
            <Text>{text}</Text>
            <Text color='gray.400'>{location}</Text>
          </Box>
        </Grid>
      </Link>
    </NextLink>
  );
};

export default EventCard;
