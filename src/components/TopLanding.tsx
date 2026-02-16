import { Box, Button, Container, Flex, Heading, Image, RatingGroup, Text } from "@chakra-ui/react";
import { HiFire } from "react-icons/hi2";
import ReviewList from "./Review/ReviewList";
import { REVIEWER } from "../data/review";
import { VscStarFull, VscStarHalf } from "react-icons/vsc";

export default function TopLanding() {
    return (
        <Box marginBottom={"200px"}>
            <Flex flexDir={{base: 'column', sm: 'column', md: 'row'}} width={"full"} gap={"3rem"}>
                <Box width={{md: "50%", sm: "100%"}}>
                    <Heading fontSize={"3rem"} lineHeight={"3.75rem"} fontWeight={"bold"} color={"white"} marginBottom={"16px"}>
                        AFK 24/7 with your computer off.
                    </Heading>
                    <Heading fontSize={"1.2rem"} lineHeight={"2rem"} fontWeight={"400"} marginBottom={"16px"} color={"white"}>
                        Control your accounts via PC, Phone or Tablet and become rich on any server!
                    </Heading>
                    <Box>
                        <Button backgroundColor={"#198754"} marginTop={"3rem"} marginBottom={"1rem"} border={"2px"} borderColor={"#ffffff25"} px={"2rem"} py={"1.2rem"}>
                            Get AFK Console Client
                        </Button>
                        <Flex alignItems={"center"}>
                            <HiFire color="#198754"/>
                            <Flex marginLeft={"0.25rem"}>
                                <Text color={"#198754"}>2 months FREE </Text>
                                <Text color={"white"} marginLeft={"0.25rem"}>with a yearly plan</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={"2rem"} alignItems={"center"} marginTop={"3rem"}>
                            <ReviewList key={"reviewlist"} details={REVIEWER}/>
                            <Container marginLeft={"20px"}>
                                <Flex fontSize={"24px"} color="#198754">
                                    <VscStarFull />
                                    <VscStarFull />
                                    <VscStarFull />
                                    <VscStarFull />
                                    <VscStarHalf  />
                                </Flex>
                                <Flex color={"white"} gap={2} marginBottom={"8px"}>
                                    <span>Join</span>
                                    <Text fontWeight={500}>39,866 </Text>
                                    <span>smart AFK'ers!</span>
                                </Flex>
                            </Container>
                        </Flex>
                    </Box>
                </Box>
                <Box width={{md: "50%", sm: "100%"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Image src={"/image/product_showcase_on_devices.webp"}/>
                </Box>
            </Flex>
        </Box>
    )
}