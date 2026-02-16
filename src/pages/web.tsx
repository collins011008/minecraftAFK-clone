import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";

export default function Web() {
    return (
        <>
            <Box backgroundColor={"#101010"}>
                <Header />
                <Landing />
                <Footer />
            </Box>
        </>
    )
}