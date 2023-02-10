import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import styles from './styles.module.scss'

export default function Home() {

  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {

    async function loadNowPlaying() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          page: 1
        }
      })

      console.log(response.data.results)

      setNowPlaying(response.data.results)
    }

    async function loadTopRated() {
      const response = await api.get("/movie/top_rated", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          page: 1
        }
      })

      setTopRated(response.data.results)
    }

    async function loadUpcoming() {
      const response = await api.get("/movie/upcoming", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          page: 1
        }
      })



      setUpcoming(response.data.results)
    }

    loadNowPlaying()
    loadTopRated()
    loadUpcoming()


  }, [])


  return (
    <div className={styles.container}>
      <h1>Now Playing</h1>
      <div className={styles.movieContainer}>

        {topRated.map((movie) => {
          return (
/* cade o css  */

            <article key={movie.id} className={styles.card}>
              <h1>{movie.title}</h1>

              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className={styles.poster}
              />

              <Link to={`/topRated/${movie.id}`}>Acessar</Link>

            </article>


          )
        })}
      </div>

      {/* <div className={styles.movieContainer}>
        {nowPlaying.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>

              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

              <Link to={`/topRated/${movie.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>

      <div className={styles.movieContainer}>
        {upcoming.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>

              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

              <Link to={`/topRated/${movie.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div> */}
    </div>
  )
}