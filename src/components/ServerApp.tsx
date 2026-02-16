import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { SERVERAPPLIST } from "../data/serverapp"

export default function ServerApp() {
    return (
        <Box>
            {
                SERVERAPPLIST.map((item, index) => (
                    <Flex key={`serverapp_${index}`} flexDir={{base: 'column', sm: 'column', md: 'row'}} textAlign={"left"} alignItems={'center'} flexWrap={'wrap'} marginBottom={"200px"} gap={"3rem"}>
                        <Box flex={1}>
                            <Text fontWeight={600} color={"#198754"} fontSize={"1.2rem"} lineHeight={"2rem"} marginBottom={0}>{item.name}</Text>
                            <Text fontWeight={900} color={"white"} fontSize={"1.5rem"} lineHeight={"2rem"} marginBottom={0}>{item.title}</Text>
                            <Text color={"white"}>{item.detail}</Text>
                        </Box>
                        <Flex flex={1} justifyContent={"center"} alignItems={'center'}>
                            <Image src={item.src} height={"250px"}/>
                        </Flex>
                    </Flex>
                ))
            }
        </Box>
    )
}

export interface ServerAppListProps {
    name: string,
    title: string,
    detail: string,
    src: string
}