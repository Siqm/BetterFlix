import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import styles from './styles.module.scss'

export default function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          page: 1
        }
      })

      const first10 = response.data.results.slice(0, 10);
      const last10 = response.data.results.slice(10, 19);

      setMovies(first10)
    }

    loadMovies()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.nowPlaying}>
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>

              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

              <Link to={`/movies/${movie.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}