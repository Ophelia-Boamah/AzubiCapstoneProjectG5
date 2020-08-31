import "../styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
