import '../styles/globals.css';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/core';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron, debug } from '../styletron';

import Navbar from '../utils/Navbars/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <CSSReset />
        <Navbar />
        <Box>
          <Component {...pageProps} />
        </Box>
      </StyletronProvider>
    </ChakraProvider>
  );
}

export default MyApp;
