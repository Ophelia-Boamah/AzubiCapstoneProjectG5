import React from 'react';
import EventCard from '../../utils/EventCard';
import { Heading, Box, Grid, Flex, Divider, Spinner } from '@chakra-ui/core';
import Topevents from '../../utils/Topevents';
import useSWR from 'swr';
import Calendar from '../../components/Calendar';

const eventslisting = () => {
  const today = new Date();
  const date =
    today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

  const [selectedDate, setSelectedDate] = React.useState(date);

  const API_URL =
    'https://my-json-server.typicode.com/OphyBoamah/AzubiCapstoneProjectG5/events';

  const fetcher = async (url) => await fetch(url).then((res) => res.json());

  const { data, error } = useSWR(API_URL, fetcher);

  if (!data) {
    return (
      <Flex align='center' justify='center' h='100vh' w='100vw'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='orange.500'
          size='xl'
        />
      </Flex>
    );
  }

  if (error) {
    return <Alert>Error Occured</Alert>;
  }

  return (
    <Box w={{ md: '90%' }} mx='auto'>
      <Flex align='center' justify='center' pt={{ md: 40 }}>
        <Box w={{ md: '70%' }}>
          <Heading as='h4' fontSize='2xl' mb={{ md: 2 }}>
            Events Listing
          </Heading>
          {data.map((item) => (
            <EventCard
              key={item.id}
              href={item.id}
              title={item.title}
              text={item.details}
              location={item.location}
              img={item.img}
              date={item.date}
            />
          ))}
        </Box>
        <Box w={{ md: '30%' }}>
          <Calendar setSelectedDate={setSelectedDate} />
          <Box>
            <Heading as='h4' fontSize='2xl' mb={{ md: 4 }}>
              Top Events
            </Heading>
            <Divider borderColor='gray.400' />
            <Topevents
              location='Abuja, Nigeria'
              title='Google Developers Meetup'
              img='/images/gdgmeetup.jpeg'
              time='10:30am, 30th Sept, 2020'
            />
            <Topevents
              location='CapeTown, South Africa'
              title='Time with the Millionaires'
              img='/images/wit2.jpg'
              time='12:30pm, 22nd Jan, 2021'
            />
            <Topevents
              location='Accra, Ghana'
              title='Power Talk Conference'
              img='/images/ticketing.jpg'
              time='1:00pm, 23rd Oct, 2020'
            />
            <Topevents
              location='Cairo, Egypt'
              title='Design Pattern Conference'
              img='/images/wit2.jpg'
              time='10:30am, 30th Sept, 2020'
            />
            <Topevents
              location='New Jersey, United States'
              title='Women in Tech Conference'
              img='/images/wit3.jpeg'
              time='08:08am, 22nd Sept, 2020'
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default eventslisting;
