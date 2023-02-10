import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api";
import styles from './styles.module.scss'

export default function Movie() {

  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    async function loadMovie() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        }
      }).then((response) => { 
        setMovie(response.data)
        setLoading(false)
      }).catch(() => {
        alert('Not found')
        return;
      })
    }

    loadMovie()
  }, )

  if(loading) {
    return (
        <div>
            loading
        </div>

    )
  }

  return (
    <div className={styles.container}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />

      <h3>Synopsis</h3>
      <span>{movie.overview}</span>

      <strong>Rate: {movie.vote_average}</strong>

      <div className={styles.areaButtons}>
        <button>Save</button>
        <button>
          <a
            href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
            target='blank'
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}