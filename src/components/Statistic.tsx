import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { STATISTICSDATA } from "../data/statistic";
import { FaCaretUp } from "react-icons/fa";

export default function Statistic() {
    return (
        <Box marginBottom={"200px"}>
            <Text fontWeight={600} color={"#198754"} fontSize={"1.2rem"} lineHeight={"2rem"} marginBottom={0} textAlign={"center"}>
                STATISTICS
            </Text>
            <Text fontWeight={600} color={"white"} fontSize={"1.5rem"} lineHeight={"3.75rem"} marginBottom={"16px"} textAlign={"center"}>
                Transparent and solid software
            </Text>
            <Flex flexWrap={'wrap'} justifyContent={'center'} gap={'1rem'}>
                {
                    STATISTICSDATA.map((item, index) => (
                        // <Tooltip key={`tooltip_${index}`} content="fds">
                            <Box key={`statistic_${index}`} backgroundColor={'#202020'} borderRadius={'4px'} padding={'1rem'} minWidth={'200px'}>
                                <Text fontSize={'1.5rem'} fontWeight={900} color={"white"} textAlign={"center"}>{item.amount}</Text>
                                <Flex justifyContent={"center"} minWidth={"200px"} padding={0} color={'#198754'} alignItems={'center'} gap={'0.2rem'}>
                                    <Text color={"white"}>{item.type}</Text>
                                    <FaCaretUp />
                                </Flex>
                            </Box>
                        // </Tooltip>
                    ))
                }
            </Flex>
        </Box>
    )
}

export interface StatisticItemProps {
    amount: string,
    type: string,
    hover: string
}