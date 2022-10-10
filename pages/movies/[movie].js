import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const { movie } = router.query

  return <p>Post: {movie}</p>
}

export default Movie