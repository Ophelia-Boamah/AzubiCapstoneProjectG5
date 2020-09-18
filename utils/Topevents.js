import React from "react";
import { Grid, Image, Box, Text, Flex } from "@chakra-ui/core";

const Topevents = ({ location, description, img, time }) => {
  return (
    <div>
      <Flex w={{ md: "80%" }} py={{ md: 4 }} borderBottom="1px solid #CBD5E0">
        <Image src={img} h={{ md: 24 }} />
        <Box pl={{ md: 6 }}>
          <Text mb={{ md: 3 }}>{description}</Text>
          <Text fontSize="sm" color="gray.500">
            {location}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {time}
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

// New Hamphire Avenue, MO, United States
export default Topevents;
