import { Box, Button, Flex } from "@chakra-ui/react";
import { CiLogin } from "react-icons/ci";

export default function Header() {
    return (
        <Box marginBottom={"3rem"}>
            <Flex width={"full"} justifyContent={"space-between"} padding={5} backgroundColor={"#101010"}>
                <Button backgroundColor={"#101010"} fontSize={18} fontWeight={"bold"} onClick={() => window.location.href = '/'}>MinecraftAFK</Button>
                <Button
                    variant={"outline"}
                    color={"white"}
                    size={"sm"}
                    _hover={{backgroundColor: "#ffffff30"}}
                    borderColor={"#ffffff25"}
                    borderWidth={2}
                    onClick={() => window.location.href = '/web'}
                >
                    <CiLogin color="white"/>
                    Login
                </Button>
            </Flex>
        </Box>
    )
}