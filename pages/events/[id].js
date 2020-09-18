import React from 'react';
import { useRouter } from 'next/router';
import {
  Alert,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Spinner,
  Text,
  Link,
} from '@chakra-ui/core';
import useSWR from 'swr';
import EventCard from '../../utils/EventCard';
import NextLink from 'next/link';

const Event = () => {
  const router = useRouter();
  const { id } = router.query;

  const API_URL = `https://my-json-server.typicode.com/OphyBoamah/AzubiCapstoneProjectG5/events/${id}`;
  const API = `https://my-json-server.typicode.com/OphyBoamah/AzubiCapstoneProjectG5/events`;

  const fetcher = async (url) => await fetch(url).then((res) => res.json());
  const { data, error } = useSWR(API_URL, fetcher);
  const { data: events } = useSWR(API, fetcher);

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

  if (!events) {
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

  const filterEvents = events.filter((item) => item.id !== id);

  if (error) {
    return <Alert>Error Occured</Alert>;
  }

  return (
    <Box py={16}>
      <Flex
        align='center'
        justify='center'
        direction='column'
        bgPos='center'
        bgSize='cover'
        color='white'
        h='600px'
        bgImage={`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/${data.img})`}
      >
        <Heading as='h2' textAlign='center' fontSize='6xl'>
          {data.title}
        </Heading>
        <Flex align='center'>
          <Text as='span' whiteSpace='nowrap' fontSize='xl'>
            {data.date}
          </Text>
          <Text as='span' whiteSpace='nowrap' mx={4} fontSize='2xl'>
            &middot;
          </Text>
          <Text as='span' whiteSpace='nowrap' fontSize='xl'>
            {data.time}
          </Text>
          <Text as='span' whiteSpace='nowrap' mx={4} fontSize='2xl'>
            &middot;
          </Text>
          <Text as='span' whiteSpace='nowrap' fontSize='xl'>
            {data.location}
          </Text>
        </Flex>

        <Box mt={4}>
          <Button w={56} h={12} colorScheme='orange'>
            Register Now!
          </Button>
        </Box>
      </Flex>

      <Box px={{ md: 20 }} my={{ md: 20 }}>
        <Grid templateColumns='60% 33%' gap={{ md: '7%' }}>
          <Box>
            <Heading as='h4' fontSize='3xl' mb={{ md: 8 }}>
              Details of this event
            </Heading>
            <Text lineHeight='1.7'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
              fuga. Quibusdam aut similique quidem inventore perspiciatis
              consequatur minus, placeat laudantium iure porro eos, provident
              consectetur maiores numquam eveniet, recusandae accusamus
              architecto? Sunt excepturi quo dolor quaerat neque ducimus
              sapiente, repudiandae dolores ullam, impedit suscipit quisquam
              saepe doloremque atque laborum. Ullam, nihil! Ab nemo mollitia
              molestiae itaque facilis repellendus accusantium qui laboriosam
              odio et cumque optio, omnis, porro illum repudiandae commodi
              tempore quidem? Officia accusantium explicabo molestiae porro
              numquam reprehenderit odio quas fuga amet, id cumque rerum
              adipisci iure unde nesciunt debitis illo, pariatur, aliquam vero?
              Minima quisquam, corrupti maiores provident suscipit error natus
              ex, illum blanditiis expedita nemo dignissimos praesentium
              distinctio ipsum in fugiat veniam odio, accusamus tempora
              aspernatur pariatur perspiciatis. Laborum cum sunt molestiae
              aliquam adipisci, inventore vero ipsa odit rerum incidunt ad nemo
              laudantium corrupti nobis asperiores voluptas numquam. Ducimus ea
              officiis pariatur quam rem neque, deleniti odit ullam obcaecati
              culpa, doloremque quae eum, veniam tempora. Exercitationem,
              repudiandae? Minima animi iusto quaerat quod totam sed quisquam
              cumque fuga rem, saepe ducimus, repudiandae ad culpa iste minus
              voluptates! Dicta reprehenderit libero, pariatur facilis
              consequuntur iure sed adipisci quis ipsam obcaecati beatae, nam
              veritatis vero sunt repellendus amet corporis quasi, dolore
              commodi nihil cupiditate hic. Ipsum dolorum necessitatibus
              repudiandae. In officia voluptatum sit nesciunt asperiores sed
              reprehenderit exercitationem natus blanditiis quisquam, animi
              temporibus necessitatibus earum sunt dignissimos illo distinctio
              est eius assumenda fugit aperiam doloribus veritatis repudiandae
              sint. Delectus perspiciatis repellat doloribus vel molestias sit.
              Illo accusantium, neque dolor, corporis a amet culpa omnis, quidem
              laudantium quas quibusdam dignissimos perferendis hic error nihil
              ad laborum? Nostrum beatae adipisci explicabo optio dolor aperiam
              exercitationem quis enim nemo ut eveniet dolorem modi repudiandae,
              quibusdam tenetur perferendis iste maxime aliquid harum hic aut.
              Eius rem possimus aliquid fugit nam, quasi harum quidem
              praesentium alias officiis dolores perferendis porro est dolorem.
              Nisi molestiae eveniet vitae illo incidunt blanditiis enim amet
              est consectetur odio ipsam atque explicabo perferendis
              reprehenderit, similique hic quaerat dolores modi dignissimos
              neque ut voluptate officiis necessitatibus! Quod amet iste a iusto
              itaque vero? Ut quae quis tenetur autem expedita molestiae alias
              eaque, ipsa doloremque odio eligendi, quasi similique perspiciatis
              numquam sunt laborum minus recusandae animi repudiandae rerum a?
              Consequatur obcaecati natus nam ea recusandae molestiae vero a
              magni cumque corporis. Repellendus tenetur laudantium at ipsum a
              cumque ad culpa soluta? Illo facilis delectus harum natus ab, ad
              optio ducimus pariatur minima, consequuntur sapiente magnam
              laboriosam necessitatibus aut mollitia fugiat libero ipsum quo
              aliquam quia debitis nobis fugit quis eaque. Quidem corrupti
              veniam magnam assumenda ratione labore accusamus. Voluptatem
              exercitationem est unde, beatae voluptatum aliquam asperiores
              facilis id cumque earum eos sapiente ab error reiciendis,
              necessitatibus delectus magni nemo totam quo. Nostrum laudantium
              aliquam labore delectus sequi minus, similique consequatur ab rem
              reiciendis ipsam repudiandae alias nihil consequuntur doloremque
              officiis laboriosam nam quasi quisquam pariatur quam! Incidunt,
              eligendi ut cupiditate praesentium id architecto consequatur est
              quaerat harum perspiciatis officia alias. Corporis, numquam soluta
              ratione alias dolores laboriosam totam officiis amet pariatur
              possimus.
            </Text>
          </Box>

          <Box>
            <Heading as='h4' fontSize='2xl' mb={{ md: 12 }}>
              Other events you might like
            </Heading>

            <Box>
              {filterEvents.map((item) => (
                <NextLink href={`/events/${item.id}`}>
                  <Link _hover={{ textDecor: 'none' }}>
                    <Flex key={item.id} my={6} align='center'>
                      <Image
                        w={48}
                        h={32}
                        objectFit='cover'
                        src={`/images/${item.img}`}
                      />
                      <Box ml={4}>
                        <Heading as='h5' fontSize='xl'>
                          {item.title}
                        </Heading>
                        <Text py={1}>{item.location}</Text>
                        <Text py={1}>{item.date}</Text>
                        <Text>{item.time}</Text>
                      </Box>
                    </Flex>
                  </Link>
                </NextLink>
              ))}
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Event;
