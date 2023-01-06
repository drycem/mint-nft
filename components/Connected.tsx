import { Button, Container, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FC } from "react";

const Connected: FC = () => {

  return (
    <VStack spacing={20}>
      <Container>
        <Heading
          color="white"
          as="h1"
          size="2xl"
          noOfLines={1}
          textAlign="center"
        >
          Welcome Buildoor.
        </Heading>

        <Text color="bodyText" fontSize="xl" textAlign="center">
          Each buildoor is randomly generated and can be stacked to receive
          <Text as="b">$$BLD</Text> Use your <Text as="b">$$BLD</Text> to
          upgrade your buildoor and receive perks within the communty!
        </Text>
      </Container>

      <HStack spacing={10}>
        <Image src="../Assets/avatar1.png" alt="" />
        <Image src="../Assets/avatar2.png" alt="" />
        <Image src="../Assets/avatar3.png" alt="" />
        <Image src="../Assets/avatar4.png" alt="" />
        <Image src="../Assets/avatar5.png" alt="" />
      </HStack>

      <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>mint buildoor</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  )
}

export default Connected
