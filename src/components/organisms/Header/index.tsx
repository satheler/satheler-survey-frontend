import { Container, Heading } from "../../atoms";

export default function Header() {
  return (
    <Container flexDirection='row'>
      <Container alignContent='start'>
        <Heading as='h1'>Satheler Survey</Heading>
      </Container>
      <Container alignItems='flex-end'>
        <Heading as='h6'>Request handled by AWS</Heading>
      </Container>

    </Container>
  )
}