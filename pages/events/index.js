import React from 'react';
import EventCard from '../../utils/EventCard';
import { Heading, Box, Flex, Divider } from '@chakra-ui/core';
import Skeleton from 'react-loading-skeleton';
import Topevents from '../../utils/Topevents';
import useSWR from 'swr';
import Calendar from '../../components/Calendar';
import { motion } from 'framer-motion';
import { ProtectRoute } from '../../utils/auth/ProtectPage';
import api from '../../utils/auth/api';
import useAuth from '../../context/userContext';

const MotionBox = motion.custom(Box);

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const eventslisting = () => {
  const today = new Date();
  const date =
    today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

  const [selectedDate, setSelectedDate] = React.useState(date);

  const { loading } = useAuth();
  const { data, isValidating } = useSWR(loading ? false : '/events', api.get);

  const showSkeleton = isValidating || loading;

  return (
    <MotionBox
      exit={{ opacity: 0 }}
      transition={transition}
      w={{ md: '90%' }}
      mx='auto'
    >
      <Flex align='center' justify='center' pt={{ md: 40 }}>
        <Box w={{ md: '70%' }}>
          <Heading as='h4' fontSize='2xl' mb={{ md: 2 }}>
            Events Listing
          </Heading>

          <Box>
            {showSkeleton && <Skeleton height={200} width={120} count={5} />}
          </Box>

          {data?.data.map((item) => (
            <EventCard
              key={item.id}
              href={item.id}
              title={item.event_date}
              text={item.description}
              location={item.venue_address}
              date={item.event_date}
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
    </MotionBox>
  );
};

export default ProtectRoute(eventslisting);
