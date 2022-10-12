import { useState, useEffect } from 'react'
import styles from '../styles/Content.module.css'
import { Loading } from "@nextui-org/react";

export const ContentPage = ({mediaType, id}) => {

    const [infoData, setInfoData] = useState({});
    const [videoData, setVideoData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getInfoData = async (mediaType, id) => {
        const data = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=3b942229f1b4c2047a94fd6ae64b9e40`);
        // console.log(`https://api.themoviedb.org/3/tv/${id}?api_key=3b942229f1b4c2047a94fd6ae64b9e40`);
        setInfoData(await data.json());
        // console.log(await data);
    }
    
    const getVideoData = async (mediaType, id) => {
        const data = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=3b942229f1b4c2047a94fd6ae64b9e40`);
        setVideoData(await data.json());
    }

    useEffect( () => {
        if(!id) return;
        setIsLoading(true);
        const fetchData = async () => {
            await getInfoData(mediaType, id);
            await getVideoData(mediaType, id);
            setIsLoading(false);
        }
        fetchData();
      }, [mediaType, id]);

      if (isLoading) return <Loading size="lg" style={{width: "100%", marginTop : "50vh"}}/>
      return (
        <div>
            <div style={{background : `rgb(225, 225, 225) url(https://image.tmdb.org/t/p/w500${infoData?.poster_path}) no-repeat`, backgroundSize : "cover"}}>
              <div className={styles.info}>
                <img src={`https://image.tmdb.org/t/p/w500${infoData?.poster_path}`} alt={infoData.original_name}/>
                <div className={styles.about}>
                  <h2 className={styles.title}>{infoData?.original_name}</h2>
                  <h2 className={styles.title}>{infoData?.original_title}</h2>
                  <h3 className={styles.tagline}>{infoData?.tagline}</h3>
                  <div>
                  {
                    infoData?.genres?.map((genre, index) => {
                      return <span key={index} className={styles.tag}>{genre.name}</span>
                    })
                  }
                  </div>
                  <div style={{"marginTop" : "15px"}}>
                    <h3>Overview</h3>
                    <p style={{"fontSize" : "1.2rem"}}>{infoData?.overview}</p>
                  </div>
                  { infoData?.networks ? <div style={{"marginTop" : "15px"}}>
                    <h5>Streaming Media</h5>
                  <a href={infoData.homepage} target="_blank" rel="noreferrer">
                    {
                      infoData?.networks?.map((network, index) => {
                      return <img style={{"margin" : "0 5px"}} src={`https://image.tmdb.org/t/p/w500${network?.logo_path}`} alt="website" width={50} key={index}/>
                      })
                    }
                  </a>
                  </div> : null}
                  <div style={{"marginTop" : "15px"}}>
                    <h5>Production Companies</h5>
                    {
                      infoData?.production_companies?.map((company, index) => {
                        if (company.logo_path) {
                          return <img style={{"margin" : "0 5px"}} src={`https://image.tmdb.org/t/p/w500${company?.logo_path}`} alt="company" width={50} key={index}/>
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
                videoData?.results?.map((trailer, index) => {
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