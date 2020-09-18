import React from 'react';
import { Grid, Heading, Box, Image, Flex, Text, Link } from '@chakra-ui/core';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const MotionImage = motion.custom(Image);
const MotionBox = motion.custom(Box);

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

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
            <MotionBox
              exit={{ opacity: 0 }}
              transition={transition}
              h={{ md: 40 }}
              w={{ md: 56 }}
              overflow='hidden'
            >
              <MotionImage
                whileHover={{ scale: 1.1 }}
                transition={transition}
                w='100%'
                h='100%'
                objectFit='cover'
                src={`/images/${img}`}
              />
            </MotionBox>
          </Grid>
          <MotionBox exit={{ opacity: 0 }} transition={transition}>
            <Heading as='h3' fontSize='3xl' mb={{ md: 6 }}>
              {title}
            </Heading>
            <Text>{text}</Text>
            <Text color='gray.400'>{location}</Text>
          </MotionBox>
        </Grid>
      </Link>
    </NextLink>
  );
};

export default EventCard;
