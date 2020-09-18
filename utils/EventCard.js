import React from 'react';
import { Grid, Heading, Box, Image, Flex, Text, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

const EventCard = ({ title, text, location, href, img, date }) => {
  return (
    <NextLink passHref href='/events/[id]' as={`/events/${href}`}>
      <Link _hover={{ textDecor: 'none' }}>
        <Grid
          templateColumns='40% 60%'
          w={{ md: '80%' }}
          // mx='auto'
          my={{ md: 8 }}
        >
          <Grid templateColumns='25% 75%' w={{ md: '80%' }} mb={{ md: 2 }}>
            <Box bg='red.400'>
              <Flex
                flexDir='column'
                align='center'
                fontSize='md'
                fontWeight={700}
                p={6}
                color='red.900'
              >
                {date}
              </Flex>
            </Box>
            <Image h={{ md: 40 }} objectFit='cover' src={`/images/${img}`} />
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
