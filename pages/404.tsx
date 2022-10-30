import { Button, Center } from "@mantine/core"
import { NextLink } from "@mantine/next"
import Image from "next/image"

const NotFound = () => {
    return (
        <Center className="flex flex-col space-y-8 mt-8">
            <Image src="/lost.gif" alt="Admit it, you're lost gif" width={500} height={281.25} />


            <NextLink href="/">
                <Button color="gray" size="xl">Return Home</Button>
            </NextLink>
        </Center>
    )
}
export default NotFound