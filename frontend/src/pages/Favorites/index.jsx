import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

export default function Favorites() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem('@primeflix')
    setMovies(JSON.parse(myList) || [])
  },[])

  function removeMovie(movieId) {
    let movieFilter = movies.filter((item) => {
      return(item.id !== movieId)
    })

    setMovies(movieFilter);
    localStorage.setItem("@primeflix", JSON.stringify(movieFilter))
    alert('Movie removed')
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ul className={styles.list}>
          {
            movies.length === 0 &&
            <span>Your saved movies list is empty :(</span>
          }

          <ul>
            {
              movies.map((i) => {
                return (
                  <li key={i.id}>
                    <span>{i.title}</span>

                    <div>
                      <Link to={`/filmes/${i.id}`}>See details</Link>
                      <button onClick={() => {removeMovie(i.id)}}>Remove</button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </ul>
      </div>
    </div>
  )
}