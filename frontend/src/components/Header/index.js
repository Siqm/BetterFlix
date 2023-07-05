import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export default function Header() {
    return(
        <header>
            <Link className={styles.logo} to='/'>
                BetterFlix
            </Link>

            <Link className={styles.favoritos} to='/favorites'>
                Meus Filmes
            </Link>
        </header>
    )
}