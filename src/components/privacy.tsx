import { Box, List, Text } from "@chakra-ui/react";
import { PRIVACYDATA } from "../data/privacy";

export default function Privacy() {
    return (
        <Box maxWidth={"1080px"} margin={"auto"}>
            <Text textAlign={'center'} color={"white"} fontWeight={600} fontSize={'4em'} paddingBottom={'50px'} lineHeight={'1.5'}>
                Privacy Policy
            </Text>
            <Text color={"white"}>
                Valoks ("us", "we", or "our") operates minecraftafk.com (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
                <br />
                <br />
                We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
            </Text>
            {
                PRIVACYDATA.map((item, index) => (
                    <>
                        <Text color={"white"} key={`tos_${index}`} fontSize={'20px'} fontWeight={400} lineHeight={1.5} marginBottom={'16px'}>
                            {item.title}
                        </Text>
                        <Text color={"white"} marginBottom={'12px'}>
                            {item.content}
                        </Text>
                        <List.Root paddingLeft={'40px'}>
                            {
                                item.detail.map((detail, idx) => (
                                    <List.Item key={`detail+${idx}`}>
                                        <Box>
                                            <Text color={"white"} fontSize={'18px'} fontWeight={400} lineHeight={1.5} marginBottom={'16px'}>{detail.title}</Text>
                                            <Text color={'white'} marginBottom={'12px'}>{detail.content}</Text>
                                        </Box>
                                    </List.Item>
                                ))
                            }
                        </List.Root>
                    </>
                ))
            }
        </Box>
    )
}

export interface PrivacyDataProps {
    title: string,
    content: string,
    detail: PrivacyDataDetailProps[]
}

export interface PrivacyDataDetailProps {
    title: string,
    content: string
}