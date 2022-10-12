import { useRouter } from 'next/router'
import { ContentPage } from '../../components/ContentPage';

const Post = () => {
  const router = useRouter()
  const { series } = router.query

  return (
    <ContentPage mediaType='tv' id={series}/>
  )
}

export default Post