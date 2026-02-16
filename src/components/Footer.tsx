import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FOOTERDATA } from "../data/footer";
import { CiCircleCheck } from "react-icons/ci";

export default function Footer() {
    return (
        <Box backgroundColor={'#202020'} marginTop={'auto'}>
            <Flex padding={'1rem'} justifyContent={'center'} flexDir={'column'} gap={'3rem'}>
                <Flex flexWrap={'wrap'} gap={'3rem'}>
                    {FOOTERDATA.map((item, index) => (
                        <Box key={`footer_${index}`}>
                            <Text color={"white"} fontSize={'20px'} fontWeight={400} lineHeight={1.5} marginBottom={'16px'}>{item.title}</Text>
                            <Flex gap={'1rem'} flexDir={'column'}>
                                {
                                    item.detail.map((value, idx) => (
                                        <Text color={"white"} fontSize={'14px'} key={`footer_detail_${idx}`} textDecorationLine={'underline'} cursor={'pointer'}>{value.item}</Text>
                                    ))
                                }
                            </Flex>
                        </Box>
                    ))}
                </Flex>
                <Flex flexWrap={'wrap'} gap={'1rem'}>
                    <Flex flex={'1 1 0'} gap={'1rem'}>
                        <Text color={"white"} maxWidth={'100px'} minWidth={'100px'}>Copyright @ 2023-2026</Text>
                        <Text color={"white"} maxWidth={'500px'} minWidth={'200px'} fontStyle={'italic'}>NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</Text>
                    </Flex>
                    <Box>
                        <Button background={'#424242'}>
                            Built by Valoks
                        </Button>
                    </Box>
                    <Flex flex={'1 1 0'} justifyContent={'end'}>
                        <Flex alignItems={'center'} gap={'1rem'} flexWrap={'wrap'}>
                            <Button backgroundColor={'transparent'} color={'#10b981'}>
                                <CiCircleCheck />
                                <Text color={"white"}>
                                    All services are online
                                </Text>
                            </Button>
                            <Flex gap={'1rem'}>
                                <Button padding={0} backgroundColor={'transparent'}>
                                    <Image maxH={'25px'} src={'/image/icon-linkedin.svg'}/>
                                </Button>
                                <Button padding={0} backgroundColor={'transparent'}>
                                    <Image maxH={'25px'} src={'/image/icon-discord.svg'}/>
                                </Button>
                                <Button padding={0} backgroundColor={'transparent'}>
                                    <Image maxH={'25px'} src={'/image/icon-youtube.svg'}/>
                                </Button>
                                <Button padding={0} backgroundColor={'transparent'}>
                                    <Image maxH={'25px'} src={'/image/icon-github.svg'}/>
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export interface FooterItemProps {
    title: string,
    detail: FooterDetail[]
}

export interface FooterDetail {
    item: string,
    url: string
}