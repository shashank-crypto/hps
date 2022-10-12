import { useRouter } from 'next/router'
import { ContentPage } from '../../components/ContentPage'

const Movie = () => {
  const router = useRouter()
  const { movie } = router.query

  return (
    <ContentPage mediaType='movie' id={movie}/>
  )
}

export default Movie