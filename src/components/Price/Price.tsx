import { Box, Button, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import { FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

export default function Price() {
    return (
        <>
            <Box>
                <Flex justifyContent={"center"} marginTop={"3rem"} marginBottom={"2rem"} >
                    <Flex backgroundColor={"#202020"} color={"white"} gap={"0.5rem"} padding={"0.5rem"} borderRadius={"4px"}>
                        <Button backgroundColor={"#424242"}>Monthly</Button>
                        <Button backgroundColor={"#202020"}>Yearly (save 17%)</Button>
                    </Flex>
                </Flex>
            </Box>
            <Flex width={"full"} flexDir={{md: "row", sm: 'column', base:'column'}} alignItems={{base: 'center', sm: 'center', md: 'initial'}} justifyContent={"center"} marginTop={"16px"}>
                <Box marginRight={"20px"} textAlign={"left"} flex={"1 0 0"} minWidth={"300px"} maxWidth={"350px"}>
                    <Flex flexDir={"column"} height={"full"}>
                        <Flex backgroundColor={"#202020"} border={"2px"} borderStyle={"solid"} borderColor={"#474447"} position={"relative"} padding={"1.5rem"} minH={"350px"} maxW={"350px"} borderRadius={"5px"} flexDir={"column"} fontWeight={400} color={"white"} height={"full"}>
                            <Flex borderRadius={"4px"} flexDir={"column"} height={"250px"} justifyContent={"space-between"}>
                                <Box>
                                    <Flex flexDir={"column"} gap={"0.3rem"}>
                                        <Text fontSize={"1rem"} fontWeight={600}>Tier 1</Text>
                                        <Flex flexWrap={"wrap"} alignItems={"center"} gap={"0.25rem"}>
                                            <Text flexWrap={"wrap"} alignItems={"center"} fontSize={"2.5rem"} fontWeight={550}>$4.79</Text>
                                            <Text flexWrap={"wrap"} alignItems={"center"}paddingTop={"10px"} fontSize={"0.7rem"} color={"#ffffff50"}>billed monthly</Text>
                                        </Flex>
                                        <Text fontWeight={400} fontSize={"14px"}>Use 1 accounts</Text>
                                    </Flex>
                                </Box>
                                <Flex flexDir={"column"} justifyContent={"space-between"}>
                                    <Button
                                        backgroundColor={"#474447"}
                                        borderRadius={"4px"}
                                        border={"2px"}
                                        borderStyle={"solid"}
                                        borderColor={"#ffffff25"}
                                        boxShadow={"none"}
                                        textAlign={"center"}
                                        marginBlock={"1rem"}
                                    >
                                            Subscribe
                                    </Button>
                                    <Box height={"5px"} backgroundColor={"#ffffff25"} borderRadius={"50px"} marginTop={"5px"}></Box>
                                </Flex>
                            </Flex>
                            <Flex flexDir={"column"} py={"20px"}>
                                <ul>
                                    <li>
                                        - Use 1 Java account
                                    </li>
                                    <li>
                                        - AFK with your PC turned off
                                    </li>
                                    <li>
                                        - AFK from any device
                                    </li>
                                    <li>
                                        - We provide proxy
                                    </li>
                                    <li>
                                        - Cancel anytime
                                    </li>
                                </ul>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box marginRight={"20px"} textAlign={"left"} flex={"1 0 0"} minWidth={"300px"} maxWidth={"350px"}>
                    <Flex flexDir={"column"} height={"full"}>
                        <Flex backgroundColor={"#202020"} border={"2px"} borderStyle={"solid"} borderColor={"#40a99b"} position={"relative"} padding={"1.5rem"} minH={"350px"} maxW={"350px"} borderRadius={"5px"} flexDir={"column"} fontWeight={400} color={"white"} height={"full"}>
                            <Flex borderRadius={"4px"} flexDir={"column"} height={"250px"} justifyContent={"space-between"}>
                                <Box>
                                    <Box>
                                        <Box width={"120px"} height={"120px"} overflow={"hidden"} position={"absolute"} top={0} right={0}>
                                            <Text
                                                backgroundColor={"#40a99b"}
                                                display={"block"}
                                                position={"absolute"}
                                                width={"225px"}
                                                padding={"10px 0"}
                                                color={"white"}
                                                fontSize={"8px"}
                                                fontWeight={900}
                                                textTransform={"uppercase"}
                                                textAlign={"center"}
                                                overflow={"hidden"}
                                                right={"100px"}
                                                left={"-25px"}
                                                top={"25px"}
                                                rotate={"45deg"}
                                            >
                                                Recommended
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Flex flexDir={"column"} gap={"0.3rem"}>
                                        <Text fontSize={"1rem"} fontWeight={600}>Tier 2</Text>
                                        <Flex flexWrap={"wrap"} alignItems={"center"} gap={"0.25rem"}>
                                            <Text flexWrap={"wrap"} alignItems={"center"} fontSize={"2.5rem"} fontWeight={550}>$9.59</Text>
                                            <Text flexWrap={"wrap"} alignItems={"center"}paddingTop={"10px"} fontSize={"0.7rem"} color={"#ffffff50"}>billed monthly</Text>
                                        </Flex>
                                        <Text fontWeight={400} fontSize={"14px"}>Use 5 accounts</Text>
                                    </Flex>
                                </Box>
                                <Flex flexDir={"column"} justifyContent={"space-between"}>
                                    <Button
                                        backgroundColor={"#40a99b"}
                                        borderRadius={"4px"}
                                        border={"2px"}
                                        borderStyle={"solid"}
                                        borderColor={"#ffffff25"}
                                        boxShadow={"none"}
                                        textAlign={"center"}
                                        marginBlock={"1rem"}
                                    >
                                            Subscribe
                                    </Button>
                                    <Box height={"5px"} backgroundColor={"#ffffff25"} borderRadius={"50px"} marginTop={"5px"}></Box>
                                </Flex>
                            </Flex>
                            <Flex flexDir={"column"} py={"20px"}>
                                <ul>
                                    <li>
                                        - Use 5 Java accounts
                                    </li>
                                    <li>
                                        - AFK with your PC turned off
                                    </li>
                                    <li>
                                        - AFK from any device
                                    </li>
                                    <li>
                                        - We provide proxy
                                    </li>
                                    <li>
                                        - Cancel anytime
                                    </li>
                                    <li>
                                        - Priority support
                                    </li>
                                    <li>
                                        - Use your own proxies
                                    </li>
                                </ul>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box marginRight={"20px"} textAlign={"left"} flex={"1 0 0"} minWidth={"300px"} maxWidth={"350px"}>
                    <Flex flexDir={"column"} height={"full"}>
                        <Flex backgroundColor={"#202020"} border={"2px"} borderStyle={"solid"} borderColor={"#258345"} position={"relative"} padding={"1.5rem"} minH={"350px"} maxW={"350px"} borderRadius={"5px"} flexDir={"column"} fontWeight={400} color={"white"} height={"full"}>
                            <Flex borderRadius={"4px"} flexDir={"column"} height={"250px"} justifyContent={"space-between"}>
                                <Box>
                                    <Box>
                                        <Box width={"120px"} height={"120px"} overflow={"hidden"} position={"absolute"} top={0} right={0}>
                                            <Text
                                                backgroundColor={"#258345"}
                                                display={"block"}
                                                position={"absolute"}
                                                width={"225px"}
                                                padding={"10px 0"}
                                                color={"white"}
                                                fontSize={"8px"}
                                                fontWeight={900}
                                                textTransform={"uppercase"}
                                                textAlign={"center"}
                                                overflow={"hidden"}
                                                right={"100px"}
                                                left={"-25px"}
                                                top={"25px"}
                                                rotate={"45deg"}
                                            >
                                                Best Value
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Flex flexDir={"column"} gap={"0.3rem"}>
                                        <Text fontSize={"1rem"} fontWeight={600}>Tier 3</Text>
                                        <Flex flexWrap={"wrap"} alignItems={"center"} gap={"0.25rem"}>
                                            <Text flexWrap={"wrap"} alignItems={"center"} fontSize={"2.5rem"} fontWeight={550}>$11.99</Text>
                                            <Text flexWrap={"wrap"} alignItems={"center"}paddingTop={"10px"} fontSize={"0.7rem"} color={"#ffffff50"}>billed monthly</Text>
                                        </Flex>
                                        <Text fontWeight={400} fontSize={"14px"}>Choose your accounts</Text>
                                    </Flex>
                                </Box>
                                <Flex flexDir={"column"} justifyContent={"space-between"}>
                                    <InputGroup
                                        flex="1"
                                        startElement={
                                            <FaMinus  
                                                color={"white"}
                                                fontSize={"24px"}
                                                cursor={"pointer"} />
                                        }
                                        endElement={
                                            <FiPlus 
                                                color={"white"}
                                                fontSize={"24px"}
                                                cursor={"pointer"} />
                                        }
                                    >
                                        <Input value={15} borderColor={"#258345"} borderWidth={"2px"} textAlign={"center"}/>
                                    </InputGroup>
                                    <Button
                                        backgroundColor={"#258345"}
                                        borderRadius={"4px"}
                                        border={"2px"}
                                        borderStyle={"solid"}
                                        borderColor={"#ffffff25"}
                                        boxShadow={"none"}
                                        textAlign={"center"}
                                        marginBlock={"1rem"}
                                    >
                                            Subscribe
                                    </Button>
                                    <Box height={"5px"} backgroundColor={"#ffffff25"} borderRadius={"50px"} marginTop={"5px"}></Box>
                                </Flex>
                            </Flex>
                            <Flex flexDir={"column"} py={"20px"}>
                                <ul>
                                    <li>
                                        - Use 15 Java account
                                    </li>
                                    <li>
                                        - AFK with your PC turned off
                                    </li>
                                    <li>
                                        - AFK from any device
                                    </li>
                                    <li>
                                        - We provide proxy
                                    </li>
                                    <li>
                                        - Cancel anytime
                                    </li>
                                    <li>
                                        - Priority support
                                    </li>
                                    <li>
                                        - Use your own proxies
                                    </li>
                                    <li>
                                        - Bot movement
                                    </li>
                                    <li>
                                        - Bypass VPN blocks
                                    </li>
                                    <li>
                                        - Purchase unlimited account slots
                                    </li>
                                    <li>
                                        - Inventory management (coming soon)
                                    </li>
                                    <li>
                                        - Bedrock accounts (coming soon)
                                    </li>
                                </ul>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}