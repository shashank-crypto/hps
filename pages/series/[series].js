import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Post = () => {
  const router = useRouter()
  const { series } = router.query

  const [seriesData, setSeriesData] = useState([]);
  const [seriesTrailer, setSeriesTrailer] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${series}?api_key=3b942229f1b4c2047a94fd6ae64b9e40`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSeriesData(data);
        })
        .catch(err => console.log("ERROOROROR", err));

    fetch(`https://api.themoviedb.org/3/tv/${series}/videos?api_key=3b942229f1b4c2047a94fd6ae64b9e40`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSeriesTrailer(data.results);
            setUpdate(true);
        }
    )
    }, [update]);

  return (
    <div>
        <p>Post: {series}</p>
        <h1>{seriesData.name}</h1>
        <iframe width="949" height="534" src={`https://www.youtube.com/embed/${seriesTrailer[0]?.key}`} title={seriesData.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div>
            <h2>Overview</h2>
            <p>{seriesData.overview}</p>
        </div>
        <div>
            {
            seriesData?.created_by?.map((creator, index) => {
                return (
                    <div key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500${creator.profile_path}`} alt={creator.name}/>
                    <h2>{creator.name}</h2>
                    </div>
                )
    })  
            }
        </div>
  </div>
  )
}

export default Post