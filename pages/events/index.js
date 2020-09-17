import React from 'react';
import EventCard from '../../utils/EventCard';
import { Heading, Box, Grid, Flex, Divider } from '@chakra-ui/core';
import Topevents from '../../utils/Topevents';
import useSWR from 'swr';
import Calendar from '../../components/Calendar';

const eventslisting = () => {
  const today = new Date();
  const date =
    today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

  const [selectedDate, setSelectedDate] = React.useState(date);

  const API_URL =
    'http://my-json-server.typicode.com/OphyBoamah/AzubiCapstoneProjectG5/events';

  const fetcher = async (url) => await fetch(url).then((res) => res.json());

  const { data, error } = useSWR(API_URL, fetcher);

  if (!data) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Alert>Error Occured</Alert>;
  }

  return (
    <Box w={{ md: '90%' }} mx='auto'>
      <Flex align='center' justify='center'>
        <Box py={{ md: 10 }}>
          <Heading as='h4' fontSize='2xl' mb={{ md: 2 }}>
            Events Listing
          </Heading>
          {data.map((item) => (
            <EventCard
              key={item.uid}
              href={item.uid}
              title={item.title}
              text={item.details}
              location={item.location}
            />
          ))}
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
