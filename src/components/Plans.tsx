import { Box, Text } from "@chakra-ui/react";
import Price from "./Price/Price";

export default function Plans() {
    return (
        <Box marginBottom={"200px"}>
            <Text fontWeight={600} color={"#198754"} fontSize={"1.2rem"} lineHeight={"2rem"} marginBottom={0} textAlign={"center"}>
                PLANS
            </Text>
            <Text fontWeight={600} color={"white"} fontSize={"1.5rem"} lineHeight={"3.75rem"} marginBottom={"16px"} textAlign={"center"}>
                The choice is yours
            </Text>
            <Price />
        </Box>
    )
}