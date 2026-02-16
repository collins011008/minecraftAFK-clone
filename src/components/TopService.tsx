import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { SERVICES } from "../data/services";

export default function TopService() {
    return (
        <Box marginBottom={"200px"}>
            <Text fontWeight={600} color={"#198754"} fontSize={"1.2rem"} lineHeight={"2rem"} marginBottom={0} textAlign={"center"}>
                TOP SERVERS
            </Text>
            <Text fontWeight={600} color={"white"} fontSize={"1.5rem"} lineHeight={"3.75rem"} marginBottom={"16px"} textAlign={"center"}>
                Works on any server
            </Text>
            <Box>
                <Flex justifyContent={"center"} alignItems={"center"} gap={"1rem"} flexWrap={"wrap"}>
                    {
                        SERVICES.map((value, index) => (
                            <Image key={`service_${index}`} src={value.src} height={"75px"}/>
                        ))
                    }
                </Flex>
            </Box>
        </Box>
    )
}

export interface TopServiceProps {
    name: string,
    src: string
}