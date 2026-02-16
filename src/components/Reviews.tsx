import { Box, Flex, RatingGroup, Text } from "@chakra-ui/react";
import { VscStarFull } from "react-icons/vsc";

export default function Reviews() {
    return (
        <Box marginBottom={"200px"}>
            <Text fontWeight={600} color={"#198754"} fontSize={"1.2rem"} lineHeight={"2rem"} marginBottom={0} textAlign={"center"}>
                REVIEWS
            </Text>
            <Text fontWeight={600} color={"white"} fontSize={"1.5rem"} lineHeight={"3.75rem"} marginBottom={"16px"} textAlign={"center"}>
                See what our customers think
            </Text>
            <Box>
                <Flex flexDirection={{md: "row", sm: "column", base: 'column'}} gap={"1rem"} justifyContent={"center"} outline={"none"}>
                    <Box borderRadius={"4px"} padding={"20px"} overflow={"hidden"} textOverflow={"ellipsis"} backgroundColor={"#202020"} outline={"none"}>
                        <Text color={"white"} textAlign={"left"} marginBottom={0}>
                            "The console client works flawlessly and gets updated regularly, you can even suggest things to get implemented on to the client in the discord which is always good. Never had any problems with it so far." - Mysticql
                        </Text>
                        <Flex marginTop={"15px"} color={"#198754"} justifyContent={"center"} fontSize={"24px"}>
                            <VscStarFull />
                            <VscStarFull />
                            <VscStarFull />
                            <VscStarFull />
                            <VscStarFull />
                        </Flex>
                    </Box>
                    <Box borderRadius={"4px"} padding={"20px"} overflow={"hidden"} textOverflow={"ellipsis"} backgroundColor={"#202020"} outline={"none"}>
                        <Text color={"white"} textAlign={"left"} marginBottom={0}>
                            "Good Minecraft afk client that is a lot more user friendly than alternatives. The staff team is also incredibly helpful and active and added proxy support for me upon my request." - Bluist
                        </Text>
                        <Flex marginTop={"15px"} color={"#198754"} justifyContent={"center"} fontSize={"24px"}>
                            <VscStarFull />
                            <VscStarFull />
                            <VscStarFull />
                            <VscStarFull />
                            <VscStarFull />
                        </Flex>
                    </Box>
                    <Box borderRadius={"4px"} padding={"20px"} overflow={"hidden"} textOverflow={"ellipsis"} backgroundColor={"#202020"} outline={"none"}>
                        <Text color={"white"} textAlign={"left"} marginBottom={0}>
                            "Really useful AFK client with loads of features. I love how clean the interface is and how easy it is to use! The support team helped me out really quickly with my questions and helped me set it all up! Thanks so much!!" - Jay
                        </Text>
                        <Flex marginTop={"15px"} color={"#198754"} justifyContent={"center"} fontSize={"24px"}>
                            <VscStarFull />
                            <VscStarFull />
                            <VscStarFull />
                            <VscStarFull />
                            <VscStarFull />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}