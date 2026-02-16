import { Accordion, Box, Span, Text } from "@chakra-ui/react";
import { FAQLIST } from "../data/faq";
import { useState } from "react";

export default function FAQ() {
    const [value, setValue] = useState([""]);
    return (
        <Box marginBottom={"200px"}>
            <Text fontWeight={600} color={"#198754"} fontSize={"1.2rem"} lineHeight={"2rem"} marginBottom={0} textAlign={"center"}>
                FAQ
            </Text>
            <Text fontWeight={600} color={"white"} fontSize={"1.5rem"} lineHeight={"3.75rem"} marginBottom={"16px"} textAlign={"center"}>
                Do you have any questions?
            </Text>
            <Box>
                <Accordion.Root collapsible gap={"1rem"} value={value} variant={"plain"} onValueChange={e => setValue(e.value)}>
                    {FAQLIST.map((item, index) => (
                        <Accordion.Item backgroundColor={"#202020"} key={index} borderRadius={0} color={"white"} value={item.title} my={value[0] == item.title ? "10px" : "0px"} >
                            <Accordion.ItemTrigger px={"24px"}>
                                <Span flex="1" color={"white"}>{item.title}</Span>
                                <Accordion.ItemIndicator />
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent>
                                <Accordion.ItemBody color={"white"} px={"24px"} paddingBottom={"16px"}>{item.detail}</Accordion.ItemBody>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </Box>
        </Box>
    )
}

export interface FAQItemProps {
    title: string,
    detail: string
}