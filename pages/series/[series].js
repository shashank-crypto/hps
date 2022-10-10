import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../../styles/Content.module.css'

const Post = () => {
  const router = useRouter()
  const { series } = router.query

  const [seriesData, setSeriesData] = useState([]);
  const [seriesTrailer, setSeriesTrailer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSeriesData = async (series) => {
    const data = await fetch(`https://api.themoviedb.org/3/tv/${series}?api_key=3b942229f1b4c2047a94fd6ae64b9e40`);
    console.log(`https://api.themoviedb.org/3/tv/${series}?api_key=3b942229f1b4c2047a94fd6ae64b9e40`);
    setSeriesData(await data.json());
    console.log(await data);
  }

  const getSeriesTrailer = async (series) => {
    const data = await fetch(`https://api.themoviedb.org/3/tv/${series}/videos?api_key=3b942229f1b4c2047a94fd6ae64b9e40`);
    setSeriesTrailer(await data.json());
  }

  useEffect( () => {
    if(!series) return;
    setIsLoading(true);
    const fetchData = async (series) => {
        await getSeriesData(series);
        await getSeriesTrailer(series);
        setIsLoading(false);
    }
    fetchData(series);
  }, [series]);

  if (isLoading) return <div>Loading...</div>
  return (
    <div>
        <div style={{background : `rgb(225, 225, 225) url(https://image.tmdb.org/t/p/w500${seriesData.poster_path}) no-repeat`, backgroundSize : "cover"}}>
          <div className={styles.info}>
            <img src={`https://image.tmdb.org/t/p/w500${seriesData.poster_path}`} alt={seriesData.original_name}/>
            <div className={styles.about}>
              <h2 className={styles.title}>{seriesData.original_name}</h2>
              <h3 className={styles.tagline}>{seriesData.tagline}</h3>
              <div>
              {
                seriesData?.genres?.map((genre, index) => {
                  return <span key={index} className={styles.tag}>{genre.name}</span>
                })
              }
              </div>
              <div style={{"marginTop" : "15px"}}>
                <h3>Overview</h3>
                <p style={{"fontSize" : "1.2rem"}}>{seriesData.overview}</p>
              </div>
              <div>
                <h5>Streaming Media</h5>
              <a href={seriesData.homepage} target="_blank" rel="noreferrer">
                {
                  seriesData?.networks?.map((network, index) => {
                  return <img style={{"margin" : "0 5px"}} src={`https://image.tmdb.org/t/p/w500${network?.logo_path}`} alt="website" width={50} key={index}/>
                  })
                }
              </a>
              </div>
              <div>
                <h5>Production Companies</h5>
                {
                  seriesData?.production_companies?.map((company, index) => {
                    if (company.logo_path) {
                      return <img style={{"margin" : "0 5px"}} src={`https://image.tmdb.org/t/p/w500${company.logo_path}`} alt="company" width={50} key={index}/>
                    }
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <h3 style={{"margin" : "10px"}}>Related videos</h3>
        <div className={styles.videos}>
        {
            seriesTrailer?.results?.map((trailer, index) => {
                return (
                    <div key={index}>
                        <h6>{trailer.name}</h6>
                        <iframe width="315" height="200" src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                )
            })
        }
        </div>
        {/* <iframe width="949" height="534" src={`https://www.youtube.com/embed/${seriesTrailer[0]?.key}`} title={seriesData.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        
        <div>
            
        </div>
  </div>
  )
}

export default Post