import { Image } from "@chakra-ui/react"

export default function EverythingItem(props: EverythingItemProps) {
    
    return (
        <>
            <Image
                src={props.src}
                height={"54px"}
                border={"7.5px"}
                borderColor={"#101010"}
                borderStyle={"solid"}
                borderRadius={"100px"}
                marginRight={"-1.5rem"}
                outline={"none"}
            />
        </>
    )
}

export interface EverythingItemProps {
    title: string,
    src: string
}