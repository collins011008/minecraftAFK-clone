import { Box, Text } from "@chakra-ui/react";
import { TOSDATA } from "../data/tos";

export default function Tos() {
    return (
        <Box maxWidth={"1080px"} margin={"auto"}>
            <Text textAlign={'center'} color={"white"} fontWeight={600} fontSize={'4em'} paddingBottom={'50px'} lineHeight={'1.5'}>
                Terms of Service
            </Text>
            <Text color={"white"}>
                Welcome to MinecraftAFK! These terms of service ("Terms") govern your access to and use of our website, products, and services (collectively, the "Service"). Please read these Terms carefully before using the Service.
            </Text>
            {
                TOSDATA.map((item, index) => (
                    <>
                        <Text color={"white"} key={`tos_${index}`} fontSize={'20px'} fontWeight={400} lineHeight={1.5} marginBottom={'16px'}>
                            {item.title}
                        </Text>
                        <Text color={"white"} marginBottom={'12px'}>
                            {item.content}
                        </Text>
                    </>
                ))
            }
        </Box>
    )
}

export interface TosDataProps {
    title: string,
    content: string
}