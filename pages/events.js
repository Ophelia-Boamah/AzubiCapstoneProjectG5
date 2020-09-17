import React from 'react';
import Events from '../utils/Events';
import { Heading, Box, Grid, Flex, Divider } from '@chakra-ui/core';
import Topevents from '../utils/Topevents';
import Calendar from '../components/Calendar';

const eventslisting = () => {
  const today = new Date();
  const date =
    today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

  const [selectedDate, setSelectedDate] = React.useState(date);

  return (
    <Box w={{ md: '90%' }} mx='auto'>
      <Flex align='center' justify='center'>
        <Box py={{ md: 10 }}>
          <Heading as='h4' fontSize='2xl' mb={{ md: 2 }}>
            Events Listing
          </Heading>
          <Events />
          <Events />
          <Events />
          <Events />
          <Events />
        </Box>
        <Box py={{ md: 40 }}>
          <Calendar setSelectedDate={setSelectedDate} />
          <Box>
            <Heading as='h4' fontSize='2xl' mb={{ md: 4 }}>
              Top Events
            </Heading>
            <Divider borderColor='gray.400' />
            <Topevents />
            <Topevents />
            <Topevents />
            <Topevents />
            <Topevents />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default eventslisting;
