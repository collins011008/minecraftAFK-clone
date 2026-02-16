import { Box, Button, Flex, Text } from "@chakra-ui/react";

export default function GetStarted() {
    return (
        <Box marginBottom={"200px"}>
            <Text fontWeight={600} color={"#198754"} fontSize={"1.2rem"} lineHeight={"2rem"} marginBottom={0} textAlign={"center"}>
                GET STARTED
            </Text>
            <Text fontWeight={600} color={"white"} fontSize={"1.5rem"} lineHeight={"3.75rem"} marginBottom={"16px"} textAlign={"center"}>
                What are you waiting for?
            </Text>
            <Flex justifyContent={'center'}>
                <Flex display={'inline-flex'} backgroundColor={'#202020'} borderRadius={'4px'} padding={'1rem'} gap={'1rem'} textAlign={'left'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
                    <Text color={"white"}>AFK 24/7 from any device</Text>
                    <Flex display={'inline-flex'}>
                        <Button backgroundColor={'#198754'} border={'2px'} borderStyle={'solid'} borderColor={"#ffffff25"} padding={'1.2rem 2rem'}>
                            Get AFK Console Client
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}