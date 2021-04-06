import { Header } from "../organisms";
import FeaturedCards from "../templates/FeaturedCards";

const surveysToAnswer = [
  {
    image: 'asd',
    title: 'fgh',
    description: 'jkl'
  },
  {
    image: 'qwe',
    title: 'rty',
    description: 'uio'
  },
  {
    image: 'zxc',
    title: 'vbn',
    description: 'm12'
  }
]

export default function HomePage() {
  return (
    <>
      <Header />
      <FeaturedCards title='Surveys to answer' contents={surveysToAnswer} />
      <FeaturedCards title='Finished Surveys' contents={[]} />
    </>
  )


}
