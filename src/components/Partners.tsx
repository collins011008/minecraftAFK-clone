import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { PARTNERS } from "../data/partners";

export default function Partners() {
    return (
        <Box marginBottom={"200px"}>
            <Text fontWeight={600} color={"#198754"} fontSize={"1.2rem"} lineHeight={"2rem"} marginBottom={0} textAlign={"center"}>
                PARTNERS
            </Text>
            <Text fontWeight={600} color={"white"} fontSize={"1.5rem"} lineHeight={"3.75rem"} marginBottom={"16px"} textAlign={"center"}>
                We're partnered with
            </Text>
            <Box>
                <Flex gap={"1rem"} flexWrap={"wrap"} justifyContent={"center"}>
                    {
                        PARTNERS.map((value, index) => (
                            <Button
                                key={`partners_${index}`}
                                display={"inline-flex"}
                                position={"relative"}
                                alignItems={"center"}
                                backgroundColor={"#202020"}
                                padding={"2rem"}
                                borderRadius={"4px"}
                                minWidth={"64px"}
                            >
                                <Image src={value.src} height={"2rem"} marginTop={"5.6px"}/>
                            </Button>
                        ))
                    }
                </Flex>
            </Box>
        </Box>
    )
}

export interface PartnersItemProps {
    name: string,
    src: string
}