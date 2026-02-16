import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Tos from "@/src/components/Tos";
import { Box } from "@chakra-ui/react";

export default function Web() {
    return (
        <>
            <Box backgroundColor={"#101010"}>
                <Header />
                <Tos />
                <Footer />
            </Box>
        </>
    )
}