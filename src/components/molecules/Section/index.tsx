import { Container, Heading } from "../../atoms";

type SectionProps = {
  title: string
}

const Section: React.FC<SectionProps> = ({ children, title }) => {

  return (
    <Container>
      <Heading as='h3'>{title}</Heading>
      {children}
    </Container>
  )
}

export default Section;