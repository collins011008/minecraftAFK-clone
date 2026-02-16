import { Flex } from "@chakra-ui/react"
import ReviewerImage, { ReviewerImageProps } from "./ReviewerImage"

export default function ReviewList(
    props: ReviewListProps
) {
    return (
        <Flex flexWrap={"nowrap"}>
            {
                props.details.map((detail, index) => (
                    <ReviewerImage key={`reviewerImage_${index}`} {...detail} />
                ))
            }
        </Flex>
    )
}

export interface ReviewListProps {
    details: ReviewerImageProps[]
}