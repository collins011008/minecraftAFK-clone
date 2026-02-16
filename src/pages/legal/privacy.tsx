import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Privacy from "@/src/components/privacy";
import { Box } from "@chakra-ui/react";

export default function Web() {
    return (
        <>
            <Box backgroundColor={"#101010"}>
                <Header />
                <Privacy />
                <Footer />
            </Box>
        </>
    )
}