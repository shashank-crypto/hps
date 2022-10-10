import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { mostWatched } = router.query

  return (
    <>
  <p>Post: {mostWatched}</p>
  <iframe width="949" height="534" src="https://www.youtube.com/embed/c9SSpyS_cfg" title="When She Asks You to Return the Favor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </>
  )
}

export default Post