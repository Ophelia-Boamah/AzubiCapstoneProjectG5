import React from 'react';
import { useRouter } from 'next/router';
import { Alert, Box } from '@chakra-ui/core';
import useSWR from 'swr';

const Event = () => {
  const router = useRouter();
  const { id } = router.query;

  const API_URL = `http://my-json-server.typicode.com/OphyBoamah/AzubiCapstoneProjectG5/events/${id}`;

  const fetcher = async (url) => await fetch(url).then((res) => res.json());
  const { data, error } = useSWR(API_URL, fetcher);

  if (!data) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Alert>Error Occured</Alert>;
  }

  console.log('data', data);

  return (
    <Box p={20}>
      <pre>{id}</pre>
    </Box>
  );
};

export default Event;
