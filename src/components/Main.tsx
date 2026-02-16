import { Box } from "@chakra-ui/react";
import TopLanding from "./TopLanding";
import Included from "./Included";
import Reviews from "./Reviews";
import Plans from "./Plans";
import TopService from "./TopService";
import Partners from "./Partners";
import FAQ from "./FAQ";
import ServerApp from "./ServerApp";
import Statistic from "./Statistic";
import GetStarted from "./GetStarted";

export default function Main() {
    return (
        <Box maxWidth={"1080px"} margin={"auto"}>
            <TopLanding />
            <Included />
            <Reviews />
            <Plans />
            <TopService />
            <Partners />
            <FAQ />
            <ServerApp />
            <Statistic />
            <GetStarted />
        </Box>
    )
}