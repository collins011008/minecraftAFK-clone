import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { ThemeProvider } from "next-themes";

import MainLayout from "./layout";
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
const config = defineConfig({
  theme: {
    tokens: {
      colors: {}
    }
  }
})

const system = createSystem(defaultConfig, config);
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <MainLayout>
            <ChakraProvider value={system}>
                <Component key={router.asPath} {...pageProps} />
            </ChakraProvider>
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
