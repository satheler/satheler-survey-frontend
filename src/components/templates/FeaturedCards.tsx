import { Container, Heading, SpaceDivider } from "../atoms"
import Card from "../atoms/Card"
import { Section } from "../molecules"

type ContentType = {
  image: string
  title: string
  description: string
}

type FeaturedCardsProps = {
  title: string
  contents: ContentType[]
}

const EmptyContent = (
  <Heading as='h5'>Nothing to show</Heading>
)

const RenderContents = (contents: FeaturedCardsProps['contents']) =>
  contents.map((content, index) => (
    <SpaceDivider key={`featured-card-${index}`}>
      <Card width='150px'>
        {content.image}
        <br />
        {content.title}
        <br />
        {content.description}
      </Card>
    </SpaceDivider>
  ))

const FeaturedCards: React.FC<FeaturedCardsProps> = ({ title, contents }) => {
  return (
    <Section title={title}>
      <Container flexDirection='row' alignItems='flex-start'>
        {
          contents.length === 0
            ? EmptyContent
            : RenderContents(contents)
        }
      </Container>
    </Section >
  )
}

export default FeaturedCards