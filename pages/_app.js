import "../styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import Navbar from "../utils/Navbars/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
