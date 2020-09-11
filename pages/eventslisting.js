import React from "react";
import Events from "../utils/events";
import { Heading, Box, Grid, Flex } from "@chakra-ui/core";
import Topevents from "../utils/Topevents";
import Calendar from "react-calendar";

const eventslisting = () => {
  return (
    <Box w={{ md: "90%" }} mx="auto">
      <Flex align="center" justify="center">
        <Box py={{ md: 10 }}>
          <Heading as="h4" fontSize="2xl" mb={{ md: 2 }}>
            Events Listing
          </Heading>
          <Events />
          <Events />
          <Events />
          <Events />
          <Events />
        </Box>
        <Box py={{ md: 40 }}>
          <Calendar />
          <Box>
            <Heading
              as="h4"
              fontSize="2xl"
              mb={{ md: 4 }}
              borderBottom="1px solid #CBD5E0"
            >
              Top Events
            </Heading>
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
