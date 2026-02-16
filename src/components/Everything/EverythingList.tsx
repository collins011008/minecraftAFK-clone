import { Flex } from "@chakra-ui/react"
import EverythingItem, { EverythingItemProps } from "./EverythingItem"

export default function ReviewList(
    props: EverythingItemListProps
) {
    return (
        <Flex flexWrap={"nowrap"}>
            {
                props.details.map((detail, index) => (
                    <EverythingItem key={`reviewerImage_${index}`} {...detail} />
                ))
            }
        </Flex>
    )
}

export interface EverythingItemListProps {
    details: EverythingItemProps[]
}