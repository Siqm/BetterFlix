import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import styles from './styles.module.scss'

export default function Home() {

    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [loading, setLoading] = useState(true);
    const content = [nowPlaying, topRated, upcoming]

    useEffect(() => {

        async function getResult(apiEndpoint) {

            const response = await api.get(apiEndpoint, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    page: 1
                }
            })

            return response
        }

        async function loadNowPlaying() {


            const nowPlaying = (await getResult("movie/now_playing")).data.results

            setNowPlaying(nowPlaying)
            setLoading(false)
        }

        async function loadTopRated() {

            const topRated = (await getResult("/movie/top_rated")).data.results

            setTopRated(topRated)
            setLoading(false)
        }

        async function loadUpcoming() {

            const upcoming = (await getResult("/movie/upcoming")).data.results

            setUpcoming(upcoming)
            setLoading(false)

        }

        loadNowPlaying()
        loadTopRated()
        loadUpcoming()


    }, [])

    if (loading) {
        
        return (
            <div className={styles.container}>
                <h1>Now Playing</h1>
                <div className={styles.movieContainer}>
                    <h3>Carregando filmes</h3>
                </div>
            </div>
        )
    }


    return (
        <div className={styles.container}>
            <h1>Now Playing</h1>
            <div className={styles.movieContainer}>

                {topRated.map((movie) => {
                    return (

                        <article key={movie.id} className={styles.card}>
                            <h1>{movie.title}</h1>

                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title}
                                className={styles.poster}
                            />

                            <Link to={`/movie/${movie.id}`}>Acessar</Link>

                        </article>


                    )
                })}
            </div>

            <div className={styles.movieContainer}>
                {nowPlaying.map((movie) => {
                    return (
                        <article key={movie.id} className={styles.card}>
                            <h1>{movie.title}</h1>

                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title}
                                className={styles.poster}
                            />

                            <Link to={`/movie/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>

            <div className={styles.movieContainer}>
                {upcoming.map((movie) => {
                    return (
                        <article key={movie.id} className={styles.card}>
                            <h1>{movie.title}</h1>

                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title}
                                className={styles.poster}
                            />

                            <Link to={`/movie/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}