import { Box, Flex, Image, Table, Text } from "@chakra-ui/react";
import Price from "./Price/Price";
import { LOGOLIST } from "../data/logo";
import { SERVICES } from "../data/services";
import { FLAGS } from "../data/flag";
import { ACCOUNTDATALIST } from "../data/account";
import { QUESTIONS } from "../data/questions";
import GetStarted from "./GetStarted";

export default function Landing() {
    return (
        <Box maxWidth={"1080px"} margin={"auto"}>
            <Text color={"white"} textAlign={"center"} fontWeight={'600'} fontSize={'4rem'} lineHeight={1.5}marginBottom={'16px'}>
                AFK Console Client - Web
            </Text>
            <Text color={"white"} textAlign={'center'} marginBottom={'12px'} fontSize={'14px'} fontWeight={400}>
                AFK 24/7 with your computer off! Conquer any server!
            </Text>
            <Price />
            <Flex flexDir={'column'} gap={'5rem'}>
                <Box>
                    <Flex marginTop={'50px'} gap={'1rem'} justifyContent={'center'} flexWrap={'wrap'}>
                        {
                            LOGOLIST.map((item, index) => (
                                <Flex
                                    key={`logo_${index}`}
                                    backgroundColor={item.color}
                                    width={'76px'}
                                    height={'51px'}
                                    padding={'0.5rem'}
                                    borderRadius={'4px'}
                                    justifyContent={'center'}
                                >
                                    <Image alignSelf={'center'} width={'fit-content'} height={'fit-content'} src={item.src}/>
                                </Flex>
                            ))
                        }
                    </Flex>
                </Box>
                <Box>
                    <Text
                        color={"white"}
                        fontWeight={600}
                        marginTop={'50px'}
                        marginBottom={'1rem'}
                        textAlign={'center'}
                        lineHeight={1.5}
                        fontSize={'20px'}
                    >
                        Want lifetime?
                    </Text>
                    <Text
                        color={"white"}
                        textAlign={'center'}
                        marginTop={'1rem'}
                        marginBottom={'12px'}
                    >
                        Contact us on Discord and we'll figure something out for you
                    </Text>
                </Box>
                <Box>
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
                    <Text color={'white'} textAlign={'center'} marginTop={'1rem'} marginBottom={'12px'}>
                        and many more...
                    </Text>
                </Box>
                <Box>
                    <Text color={"white"} textAlign={"center"} fontWeight={'600'} fontSize={'1.5rem'} lineHeight={1.5}marginBottom={'16px'}>
                        Used across nations
                    </Text>
                    <Flex justifyContent={'center'} gap={'1rem'}>
                        {
                            FLAGS.map((item, index) => (
                                <Image src={item.src} height={'3rem'}/>
                            ))
                        }
                    </Flex>
                    <Text color={"white"} textAlign={'center'} marginBottom={'12px'} fontSize={'14px'} fontWeight={400}>
                        and many more...
                    </Text>
                </Box>
                <Box>
                    <Text fontWeight={600} color={"white"} fontSize={"1.5rem"} lineHeight={"3.75rem"} textAlign={"center"}>
                        Buy additional account slots
                    </Text>
                    <Text color={'white'} textAlign={'center'} marginBottom={'12px'}>
                        Buy as many account slots as you need on Tier 3. Here's the pricing
                    </Text>
                    <Table.Root size="sm" color={"white"}>
                        <Table.Header backgroundColor={'#202020'}>
                            <Table.Row backgroundColor={'#202020'} height={'52px'}>
                                <Table.ColumnHeader color={"white"} px={'16px'} fontSize={'16px'}>Additional accounts</Table.ColumnHeader>
                                <Table.ColumnHeader color={"white"} px={'16px'} fontSize={'16px'}>Monthly plan cost per account</Table.ColumnHeader>
                                <Table.ColumnHeader color={"white"} px={'16px'} fontSize={'16px'}>Yearly plan cost per account</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body backgroundColor={'#202020'} divideColor={'gray.100'}>
                            {ACCOUNTDATALIST.map((item, index) => (
                            <Table.Row key={`account_${index}`} backgroundColor={'#202020'} height={'52px'}>
                                <Table.Cell px={'16px'}>{item.account}</Table.Cell>
                                <Table.Cell px={'16px'}>{item.monthly}</Table.Cell>
                                <Table.Cell px={'16px'}>{item.yearly}</Table.Cell>
                            </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Box>
                <Box>
                    <Text fontWeight={600} color={"white"} fontSize={"1.5rem"} lineHeight={"3.75rem"} marginBottom={"16px"} textAlign={"center"}>
                        Frequently Asked Questions
                    </Text>
                    <Box>
                        {
                            QUESTIONS.map((item, index) => (
                                <>
                                    <Text
                                        key={`questions_${index}`}
                                        marginTop={'50px'}
                                        borderColor={'#ffffff25'}
                                        display={'block'}
                                        color={'gray'}
                                        overflow={'hidden'}
                                        borderStyle={'inset'}
                                        borderWidth={'1px'}
                                    />
                                    <Text
                                        fontWeight={600}
                                        marginTop={'50px'}
                                        marginBottom={'5px'}
                                        textAlign={'left'}
                                        lineHeight={1.5}
                                        color={"white"}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text color={"white"}>
                                        {item.content}
                                    </Text>

                                </>
                            ))
                        }
                        <Text
                            marginTop={'50px'}
                            borderColor={'#ffffff25'}
                            display={'block'}
                            color={'gray'}
                            overflow={'hidden'}
                            borderStyle={'inset'}
                            borderWidth={'1px'}
                        />
                    </Box>
                </Box>
                <GetStarted />
            </Flex>
        </Box>
    )
}

export interface LogoItemProps {
    src: string,
    color: string
}

export interface FlagItemProps {
    src: string
}

export interface AccountInfoProps {
    account: string,
    monthly: string,
    yearly: string
}

export interface QuestionsProps {
    title: string,
    content: string
}