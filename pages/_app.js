import '../styles/globals.css';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/core';
import { Provider as StyletronProvider } from 'styletron-react';
import { useRouter } from 'next/router';
import { styletron, debug } from '../styletron';

import Navbar from '../utils/Navbars/Navbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ChakraProvider>
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <CSSReset />
        <Navbar />
        <Box>
          <Component {...pageProps} />
        </Box>
        {router.pathname === '/' ? (
          ''
        ) : (
          <Box
            as='footer'
            mt={{ md: 16 }}
            mb={6}
            px={{ md: 20 }}
            textAlign='center'
          >
            &copy; 2020. A-Teo. All rights reserved.
          </Box>
        )}
      </StyletronProvider>
    </ChakraProvider>
  );
}

export default MyApp;
