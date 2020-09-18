import '../styles/globals.css';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/core';
import { Provider as StyletronProvider } from 'styletron-react';
import { useRouter } from 'next/router';
import { styletron, debug } from '../styletron';

import Navbar from '../utils/Navbars/Navbar';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = React.useState(null);
  return (
    <ChakraProvider>
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <CSSReset />
        <AnimatePresence initial={false} exitBeforeEnter>
          <Navbar user={user} />
          <Box>
            <Component {...pageProps} setUser={setUser} />
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
        </AnimatePresence>
      </StyletronProvider>
    </ChakraProvider>
  );
}

export default MyApp;
