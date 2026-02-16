import { Box, ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Chat from "../components/Chat";

// const config = defineConfig({
//   theme: {
//     tokens: {
//       colors: {}
//     }
//   }
// })

// const system = createSystem(defaultConfig, config);

export default function Home() {
  return (
    <>
      {/* <ChakraProvider value={system}> */}
        <Box backgroundColor={"#101010"} position={'relative'}>
          <Header />
          <Main />
          <Footer />
          <Chat />
        </Box>
      {/* </ChakraProvider> */}
    </>
  );
}