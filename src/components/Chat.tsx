import { Box, Flex } from "@chakra-ui/react";
import { FaMessage } from "react-icons/fa6";

export default function Chat() {
    return (
        <Box position={'fixed'} width={'48px'} height={'48px'} cursor={'pointer'} background={'#2a2627'} borderRadius={'100px'} bottom={'20px'} right={'20px'} zIndex={10000000000}>
            <Flex width={'full'} height={'full'} color={"white"} justifyContent={'center'} alignItems={'center'} fontSize={'20px'}>
                <FaMessage />
            </Flex>
        </Box>
    )
}