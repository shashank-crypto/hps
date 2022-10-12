import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Content from '../components/ContentList';

import { useState, useEffect } from 'react';

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [mostWatched, setMostWatched] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=3b942229f1b4c2047a94fd6ae64b9e40')
      .then(res => res.json())
      .then(data => {
        console.log("momom", data.results);
        setMovies(data.results);
        console.log("Movies: ", movies);
      })
      .catch(err => console.log("ERROOROROR", err));
    
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=3b942229f1b4c2047a94fd6ae64b9e40')
      .then(res => res.json())
      .then(data => {
        setSeries(data.results);
      })

    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=3b942229f1b4c2047a94fd6ae64b9e40')
      .then(res => res.json())
      .then(data => {
        setMostWatched(data.results);
      })
  }, []);

  return (
    <div className={styles.container}>
      <h2 style={{"backgroundColor" : "red", "textAlign" : 'center' }}>
        HPS Entertainments
      </h2>
      <NavBar/>
      <div id='movies'><Content title='Movies' content={movies} link='movies'/></div>
      <div id='series'><Content title='Series' content={series} link='series'/></div>
      <div id='mostwatched'><Content title='Most Watched' content={mostWatched} link='most-watched'/></div>
    </div>
  )
}
